import 'package:flutter/material.dart';
import 'package:flutter_renderer/core/theme.dart';
import 'package:flutter_renderer/features/setup_screen/presentation/setup_screen.dart';

void main() {
  runApp(const VisplayApp());
}

class VisplayApp extends StatelessWidget {
  const VisplayApp({Key? key}) : super(key: key);

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return WidgetsApp(
      color: Colors.blue,
      builder: (_, __) => Theme(
        data: cThemeData,
        child: const SetupScreen(),
      ),
    );
  }
}
