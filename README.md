# PUPMARINE 🐾

> **Canine Dub Siren & Sonar Synthesizer** — A doggy-themed, fully unobscured clone of Dubmarine.

[![GitHub Pages](https://img.shields.io/badge/Demo-Live%20on%20GitHub%20Pages-f59e0b?style=for-the-badge&logo=github)](https://mearxl.github.io/pupmarine/)

---

## 🐶 Features

* **Bark VCO Engine**: Dual oscillator synthesis pipeline with Sine, Square, Saw Down, and Triangle waveforms.
* **Sub-Woof Modulator**: Dual Warble, Narrow Squeak Pulse, Zoomies Step, and Derpy Sample & Hold waveforms.
* **Canine Biometrics Knobs**:
  * **PITCH**: Base bark / whimper tone frequency (30 Hz – 9 kHz)
  * **PANT/WAG**: LFO modulation speed (0.1 Hz – 35 Hz)
  * **CHEST**: Depth percentage of modulation
  * **SNIFF**: Resonant biquad lowpass filter (100 Hz – 16 kHz)
  * **GROWL**: Filter resonance Q-factor
  * **SWEEP**: Dynamic pitch glide
  * **HOWL**: Tail decay length
  * **WOOF VOL**: Master canine output
* **Tennis Ball Targeting Scope**: 2D interactive modulation radar controlling X/Y parameters in real time.
* **Dual FX Rack**:
  * **Canyon Howl**: Stereo feedback tape delay with feedback saturation and lowpass damping.
  * **Doghouse Reverb**: Dual-channel impulse response convolution space.
* **DSP AudioWorklet**: Web Audio Worklet Processor backed by compiled WebAssembly DSP (`dubmarine_dsp.wasm`).

---

## 🚀 Running Locally

Clone this repository and serve with any local HTTP server (ES modules & WASM require HTTP):

```bash
git clone https://github.com/mearxl/pupmarine.git
cd pupmarine
npx serve .
```

Then visit `http://localhost:3000`.

---

## 🦴 License
MIT
