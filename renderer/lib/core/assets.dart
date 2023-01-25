const cAssetsDir = '../../assets/';

// Visplay Icon Animation
const cVisplayIconFile =
    AnimationFile(cAssetsDir + 'animations/visplay_icon.riv');
final cVisplayIconAnimationDark = cVisplayIconFile.withArtBoard('Visplay_Dark');

class AnimationFile {
  final String path;

  const AnimationFile(this.path);

  Animation withArtBoard(String artboard) => Animation(this, artboard);
}

class Animation {
  final AnimationFile animationFile;
  final String artboard;

  const Animation(this.animationFile, this.artboard);
}
