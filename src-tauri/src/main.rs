// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use tauri::{Manager};

fn main() {
    tauri::Builder::default()
        .setup(|app| {
            let main_window = app.get_window("main").unwrap();
            let screen = main_window.current_monitor().unwrap().unwrap();
            let screen_height = screen.size().height as f64;
            let height = screen_height / 2.0;
            let width = height / 800.0 * 1280.0; // Maintain similar aspect ratio
            main_window.set_size(tauri::Size::Logical(tauri::LogicalSize {
                width,
                height,
            })).unwrap();
            Ok(())
        })
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}