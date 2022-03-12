export function getForeheadCoords(face_x, face_y, face_width, face_height) {
  let forehead_x = face_x + face_width * 0.35;
  let forehead_y = face_y;

  let forehead_width = face_width * 0.3;
  let forehead_height = face_height * 0.1;

  return {
    x: forehead_x,
    y: forehead_y,
    width: forehead_width,
    height: forehead_height,
  };
}
