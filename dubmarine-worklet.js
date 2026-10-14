class DubmarineWorklet extends AudioWorkletProcessor {
    constructor() {
        super();
        this.engine = null;

        this.port.onmessage = (event) => {
            const { type, wasmBytes, params } = event.data;

            if (type === "init" && wasmBytes) {
                WebAssembly.instantiate(wasmBytes).then((result) => {
                    const { DubEngine } = result.instance.exports;
                    this.engine = DubEngine.new(sampleRate);
                });
            } else if (type === "set-params" && this.engine) {
                this.engine.set_params(params.freq, params.lfoRate, params.lfoDepth);
            }
        };
    }

    process(inputs, outputs) {
        const output = outputs[0];
        const channel = output[0];

        if (this.engine && channel) {
            // Pass audio buffer slice directly into compiled WASM DSP engine
            this.engine.process(channel);
        }

        return true;
    }
}

registerProcessor("dubmarine-worklet", DubmarineWorklet);
