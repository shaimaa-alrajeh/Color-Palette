# Color Palette Generator

A simple web-based application that generates random color palettes with features to lock specific colors and copy their hex codes.

## Features

1. **Random Color Generation**:
   - Press the `Spacebar` to generate a new set of 5 random colors.
   
2. **Lock Colors**:
   - Lock individual colors to preserve them while generating a new palette.

3. **Copy Hex Code**:
   - Click the copy icon to copy the hex code of a color to your clipboard.

4. **Interactive Design**:
   - Hover over a color block to reveal the lock and copy icons for interaction.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/color-palette-generator.git
   ```
2. Navigate to the project directory:
   ```bash
   cd color-palette-generator
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```

## Usage

1. Open the application in your browser at `http://localhost:3000`.
2. Press the `Spacebar` to generate a palette.
3. Lock colors by clicking the lock icon.
4. Copy color hex codes by clicking the copy icon.

## Technologies Used

- **React**: Frontend library for building the user interface.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **JavaScript**: Core programming language for functionality.

## Project Structure

```
├── src
│   ├── components
│   │   └── Pallet.js      // Main color palette component
│   ├── App.js             // Application entry point
│   ├── index.css          // Global styles
│   └── index.js           // React DOM rendering
└── package.json           // Project metadata and dependencies
```

## Future Improvements

- Add the ability to save palettes.
- Include different color formats (e.g., RGB, HSL).
- Create a "Favorite Palettes" feature for user profiles.

## Demo

![image](https://github.com/user-attachments/assets/79fba72c-1f4f-4249-b135-ad52db8adcb8)

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

