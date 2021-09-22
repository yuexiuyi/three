
function isWebGLAvailable() {
  try {
    const canvas = document.createElement( 'canvas' );
    return !! ( window.WebGLRenderingContext && ( canvas.getContext( 'webgl' ) || canvas.getContext( 'experimental-webgl' ) ) );
  } catch ( e ) {
    console.log('不支持webgl')
  }
}

function isWebGL2Available() {
  try {
    const canvas = document.createElement( 'canvas' );
    return !! ( window.WebGL2RenderingContext && canvas.getContext( 'webgl2' ) );
  } catch ( e ) {
    console.log('不支持webgl2')
  }
}


export {
  isWebGLAvailable,
  isWebGL2Available
};

