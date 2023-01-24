import 'package:flutter/material.dart';
import 'package:flutter_renderer/core/assets.dart';
import 'package:rive/rive.dart';

/// This is the screen that will be shown when a TV is not yet configured
/// and is first turned on. From here, the user will need to connect to the
/// config panel and configure the TV. Once this configuration is done,
/// we would ideally redirect.
class SetupScreen extends StatefulWidget {
  const SetupScreen({Key? key}) : super(key: key);

  @override
  State<SetupScreen> createState() => _SetupScreenState();
}

class _SetupScreenState extends State<SetupScreen> {
  late StateMachineController _controller;

  void _onRiveInit(Artboard artboard) {
    _controller = StateMachineController.fromArtboard(artboard, 'Idle')!;
    artboard.addController(_controller);
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      color: const Color(0xFF313131),
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          _genVisplayIconAnimation(),
          Text(
            'Welcome to Visplay!',
            style: Theme.of(context).textTheme.headline1,
          ),
          const SizedBox(height: 50.0),
          _genConnectInfoBox(context),
          const SizedBox(height: 50.0),
        ],
      ),
    );
  }

  SizedBox _genVisplayIconAnimation() {
    return SizedBox(
      width: 500,
      height: 500,
      child: RiveAnimation.file(
        cVisplayIconAnimationDark.animationFile.path,
        artboard: cVisplayIconAnimationDark.artboard,
        onInit: _onRiveInit,
      ),
    );
  }

  Container _genConnectInfoBox(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(
        vertical: 25.0,
        horizontal: 50.0,
      ),
      decoration: BoxDecoration(
        color: const Color(0xFF414141),
        borderRadius: BorderRadius.circular(15.0),
      ),
      child: _genConnectInfoItems(context),
    );
  }

  Column _genConnectInfoItems(BuildContext context) {
    return Column(
      children: [
        Text(
          'To configure this device, please visit',
          style: Theme.of(context).textTheme.subtitle1,
        ),
        const SizedBox(height: 15.0),
        Text(
          'visplay.local',
          style: Theme.of(context).textTheme.subtitle2,
        ),
        const SizedBox(height: 40.0),
        Text(
          'Device Code',
          style: Theme.of(context).textTheme.subtitle1,
        ),
        const SizedBox(height: 15.0),
        Text(
          '962 844',
          style: Theme.of(context).textTheme.headline1,
        ),
      ],
    );
  }
}
