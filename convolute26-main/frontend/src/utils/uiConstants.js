// Standardized UI Classes for consistent design across all pages

export const UI_CLASSES = {
  // Container Classes
  container: {
    page: "h-dvh max-h-dvh overflow-hidden flex flex-col bg-white font-gilroy",
    mainContent: "flex-1 min-h-0 flex flex-col justify-center px-4 sm:px-6 md:px-20",
    centerContent: "flex-1 min-h-0 flex flex-col justify-center items-start md:items-center px-4 sm:px-6 md:px-20",
    maxWidth: "max-w-5xl md:max-w-6xl mx-auto w-full",
  },

  // Navigation/Header Classes
  nav: {
    container: "flex justify-between items-center px-4 sm:px-6 md:px-20 pt-4 sm:pt-5 md:pt-10 pb-2 sm:pb-3 md:pb-6",
    logo: "h-8 sm:h-9 md:h-12 w-auto object-contain",
    backButton: "w-10 h-10 cursor-pointer md:hidden",
    backButtonDesktop: "hidden md:block",
    contactButton: "border border-gray-300 px-8 md:px-10 py-2.5 md:py-3 rounded-xl text-gray-700 font-medium text-sm md:text-lg hover:bg-gray-50 transition-all",
    contactButtonHiddenMobile: "hidden md:block border border-gray-300 px-8 md:px-10 py-2.5 md:py-3 rounded-xl text-gray-700 font-medium text-sm md:text-lg hover:bg-gray-50 transition-all",
    contactButtonMobile: "w-full border border-gray-300 px-6 py-2 rounded-[12px] text-gray-700 font-medium text-sm hover:bg-gray-50 transition-all md:hidden",
  },

  // Typography Classes
  typography: {
    stepLabel: "text-gray-500 text-xs sm:text-sm md:text-base text-left md:text-center font-medium mb-1 md:mb-2 font-gilroy",
    heading1: "text-2xl sm:text-3xl md:text-5xl font-semibold text-gray-900 mb-4 md:mb-8 text-left md:text-center font-gilroy leading-tight",
    heading2: "text-2xl md:text-3xl font-semibold text-gray-900 mb-6 md:mb-8 font-gilroy",
    subtitle: "text-base md:text-lg text-gray-600 leading-relaxed font-gilroy",
    subtitleLg: "text-sm sm:text-base md:text-xl text-gray-600 leading-relaxed font-gilroy max-w-2xl text-left md:text-center",
  },

  // Button Classes
  button: {
    primary: "w-full md:w-auto bg-black text-white px-6 md:px-12 py-2.5 md:py-4 rounded-[12px] text-sm md:text-lg font-semibold hover:bg-gray-900 active:scale-95 transition-all disabled:bg-gray-400",
    primaryLarge: "w-full md:w-80 bg-black text-white px-8 py-4 md:py-5 rounded-2xl text-base md:text-lg font-semibold hover:bg-gray-900 active:scale-95 transition-all",
    secondary: "hidden md:block border border-gray-300 px-8 md:px-12 py-3 md:py-4 rounded-2xl text-gray-700 font-semibold text-sm md:text-lg hover:bg-gray-50 transition-all",
    secondarySmall: "hidden md:block border border-gray-300 px-8 py-2.5 rounded-xl text-gray-700 font-medium text-base hover:bg-gray-50 transition-all",
    mobileOnly: "md:hidden w-full",
  },

  // Input Classes
  input: {
    base: "w-full border border-gray-300 rounded-[12px] px-4 md:px-6 py-3 md:py-4 text-sm md:text-lg outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors",
    text: "w-full max-w-md border border-gray-300 rounded-2xl px-4 md:px-6 py-3 md:py-4 text-base md:text-lg text-left md:text-center outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors font-gilroy",
    textarea: "w-full border border-gray-300 rounded-2xl px-6 py-4 outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors",
  },

  // Radio/Selection Classes
  radioOption: {
    container: "border border-gray-300 rounded-[12px] px-4 md:px-6 py-5 md:py-5 flex justify-between items-center cursor-pointer transition-all",
    containerSelected: "border-black bg-gray-50 ring-1 ring-black",
    text: "text-sm sm:text-base md:text-xl font-medium text-gray-800",
    radio: "w-5 h-5 md:w-6 md:h-6 rounded-full border-2 flex items-center justify-center transition-all",
    radioBorder: "border-gray-300",
    radioBorderSelected: "border-black",
    radioDot: "w-3 h-3 bg-black rounded-full",
  },

  // Progress Bar Classes
  progressBar: {
    container: "flex gap-2 md:gap-4 mb-3 sm:mb-4 md:mb-10",
    bar: "h-1.5 flex-1 rounded-full",
    barActive: "bg-black",
    barInactive: "bg-gray-200",
  },

  // Footer/Action Classes
  footer: {
    container: "px-4 sm:px-6 md:px-20 pb-4 sm:pb-5 md:pb-16",
    buttonGroup: "flex justify-between items-center gap-4",
    buttonGroupMobile: "flex gap-3 md:gap-0 md:justify-between items-center",
  },
};

export default UI_CLASSES;
