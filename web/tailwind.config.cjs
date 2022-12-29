module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
    colors: {
      red: '#d73035',
      white: '#ffffff',
      gray: '#e5e5e5',
      brownLight: '#666',
      darkBrown: '#333',
      gray500: '#6b7280',
      gray800: '#1f2937',
      black: '#000',
      opaco: 'rgba(0, 0, 0, 0.8)'
    },
    minWidth: {
      'min-w-20': '20px'
    }
  },
  plugins: [],
}
