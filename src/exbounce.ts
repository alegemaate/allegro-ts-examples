import {
  set_gfx_mode,
  load_bmp,
  allegro_ready,
  screen,
  END_OF_MAIN,
  stretch_blit,
  SCREEN_W,
  SCREEN_H,
  play_sample,
  enable_debug,
  makecol,
  clear_to_color,
  install_sound,
  load_sample,
  draw_sprite,
  BITMAP,
  SAMPLE,
  rest,
  KEY_ESC,
  key,
  install_keyboard,
  DIGI_AUTODETECT,
  init_allegro_ts,
  set_display_switch_mode,
  SWITCH_PAUSE,
  GFX_AUTODETECT_WINDOWED,
  allegro_init,
  rotate_sprite,
  retrace_count,
  install_timer,
  KEY_Q,
  KEY_W,
  rotate_scaled_sprite,
  KEY_E,
  rotate_sprite_v_flip,
  KEY_R,
  draw_sprite_v_flip,
  KEY_T,
} from "allegro-ts";

// bitmap oobjects
let clouds!: BITMAP;
let ball!: BITMAP;

// sample object
let bounce!: SAMPLE;

// size and speed of the ball
const speed = 5;

// positon of the ball
let cx = 100,
  cy = 100;

// velocity of the ball
let vx = speed,
  vy = speed;

// drawing function
function draw() {
  // draw allegro clouds background
  stretch_blit(
    clouds,
    screen,
    0,
    0,
    clouds.w,
    clouds.h,
    0,
    0,
    SCREEN_W,
    SCREEN_H
  );

  // draws the ball centered
  if (key[KEY_Q]) {
    rotate_sprite(screen, ball, cx, cy, retrace_count % 360);
  } else if (key[KEY_W]) {
    rotate_scaled_sprite(screen, ball, cx, cy, retrace_count % 360, 10);
  } else if (key[KEY_E]) {
    rotate_sprite_v_flip(screen, ball, cx, cy, retrace_count % 360);
  } else if (key[KEY_R]) {
    draw_sprite_v_flip(screen, ball, cx, cy);
  } else if (key[KEY_T]) {
    rotate_scaled_sprite(screen, ball, cx, cy, 0, 10);
  } else {
    draw_sprite(screen, ball, cx, cy);
  }
}

// update game logic
function update() {
  // did the ball bounce off the wall this turn?
  let bounced = false;

  // if the ball is going to collide with screen bounds
  // after applying velocity, if so, reverse velocity
  // and remember that it bonced
  if (cx + vx > SCREEN_W) {
    vx = -speed;
    bounced = true;
  }
  if (cy + vy > SCREEN_H) {
    vy = -speed * 3;
    bounced = true;
  }
  if (cx + vx < 0) {
    vx = speed;
    bounced = true;
  }
  if (cy + vy < 0) {
    vy = speed;
    bounced = true;
  }

  // move the ball
  cx += vx;
  cy += vy;

  // if it bounced, play a sound
  if (bounced) play_sample(bounce);

  // add gravity
  vy += 0.3;
}

// entry point of our example
async function main() {
  // enable debugging to console element
  enable_debug("debug");

  allegro_init();

  // make the dimesnions 640x480
  set_gfx_mode(GFX_AUTODETECT_WINDOWED, 640, 480, 0, 0);

  set_display_switch_mode(SWITCH_PAUSE);

  install_sound(DIGI_AUTODETECT, DIGI_AUTODETECT, null);

  install_keyboard();

  install_timer();

  // load ball image
  ball = load_bmp("assets/planet.png");

  // load background image
  clouds = load_bmp("assets/clouds.png");

  // load the bounce sound
  bounce = await load_sample("assets/bounce.mp3");

  // make sure everything has loaded
  await allegro_ready();

  // repeat this game loop
  while (!key[KEY_ESC]) {
    // clear screen
    clear_to_color(screen, makecol(255, 255, 255));

    // update game logic
    update();

    // render everything
    draw();

    // all this happens 60 times per second
    await rest(16);
  }

  // the end
  return 0;
}
// make sure that main() gets called as soon as the wesbite has loaded
END_OF_MAIN();

// Start
init_allegro_ts("canvas_id", main);
