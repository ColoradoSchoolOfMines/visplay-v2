# Flutter Renderer

A Visplay renderer implementation in [Flutter](https://flutter.dev).

# Setting up Flutter

## Linux

It is recommended to use [snap](https://snapcraft.io/) to install Flutter.
Once snap is installed, run 

```sudo snap install flutter --classic```

Then run 
```flutter config --enable-linux-desktop```
to enable Linux builds.

## MacOS

You will probably need [XCode](https://developer.apple.com/xcode/).
Please follow the instructions at [https://docs.flutter.dev/get-started/install/macos](https://docs.flutter.dev/get-started/install/macos) to install Flutter.

Then run
```flutter config --enable-macos-desktop```
to enable MacOS builds.

## Windows
Please follow the instructions at [https://docs.flutter.dev/get-started/install/windows](https://docs.flutter.dev/get-started/install/windows) to install Flutter.

# Running the renderer

Just execute
```flutter run```

Or, if using Visual Studio Code, the Flutter extension is recommended, this should allow for easy hot-reloading.

Please note that Linux and MacOS builds can be extremely slow in debug mode (they are still in beta).
To view more realistic performance, please run ```flutter run --release```. This will not include hot reload.

Linux users may prefer to run dev builds in a web browser.