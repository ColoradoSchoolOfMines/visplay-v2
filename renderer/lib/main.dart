import 'package:flutter/material.dart';
import 'package:rive/rive.dart';

void main() {
  runApp(const VisplayApp());
}

const ASSETS_DIR = '../assets/';

class VisplayApp extends StatelessWidget {
  const VisplayApp({Key? key}) : super(key: key);

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return WidgetsApp(
      color: Colors.blue,
      builder: (_, __) => const Home(),
    );
  }
}

class Home extends StatefulWidget {
  const Home({
    Key? key,
  }) : super(key: key);

  @override
  State<Home> createState() => _HomeState();
}

class _HomeState extends State<Home> {
  late StateMachineController _controller;

  void _onRiveInit(Artboard artboard) {
    _controller = StateMachineController.fromArtboard(artboard, 'Idle')!;
    artboard.addController(_controller);
    // Exit = _controller.findInput<bool>('bump') as SMITrigger;
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      color: const Color(0xFF313131),
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          SizedBox(
            width: 500,
            height: 500,
            child: RiveAnimation.file(
              ASSETS_DIR + 'animations/visplay_icon.riv',
              artboard: 'Visplay_Dark',
              onInit: _onRiveInit,
            ),
          ),
          const Text(
            'Welcome to Visplay!',
            style: TextStyle(
              fontSize: 50.0,
              fontFamily: 'metropolis',
              fontWeight: FontWeight.w700,
            ),
          ),
          const SizedBox(height: 50.0),
          Container(
            padding: const EdgeInsets.symmetric(
              vertical: 25.0,
              horizontal: 50.0,
            ),
            decoration: BoxDecoration(
              color: const Color(0xFF414141),
              borderRadius: BorderRadius.circular(15.0),
            ),
            child: Column(
              children: const [
                Text(
                  'To configure this device, please visit',
                  style: TextStyle(
                    fontFamily: 'metropolis',
                    fontSize: 25.0,
                  ),
                ),
                SizedBox(height: 15.0),
                Text(
                  'visplay.local',
                  style: TextStyle(
                    fontSize: 35.0,
                    fontFamily: 'metropolis',
                    fontWeight: FontWeight.w600,
                  ),
                ),
                SizedBox(height: 40.0),
                Text(
                  'Device Code',
                  style: TextStyle(
                    fontFamily: 'metropolis',
                    fontSize: 25.0,
                  ),
                ),
                SizedBox(height: 15.0),
                Text(
                  '962 844',
                  style: TextStyle(
                    fontSize: 45.0,
                    fontFamily: 'metropolis',
                    fontWeight: FontWeight.w500,
                  ),
                ),
              ],
            ),
          ),
          const SizedBox(height: 50.0),
        ],
      ),
    );
  }
}
