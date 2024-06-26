/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      mobile: "360px",
      tablet: "540px",
      desktop: "1280px",
    },
    fontFamily: {
      body: ["PT Serif", "serif"],
      inter: ["Inter", "sans-serif"],
      helvetica: ["Helvetica", "Arial", "sans-serif"],
      roboto: ["Roboto", "Arial", "sans-serif"],
      display: ["SF Pro Display", "Arial", "sans-serif"],
    },
    extend: {
      width: {
        "30p": "30px",
        "75p": "75px",
        "80p": "80px",
        "124p": "124px",
        "130p": "130px",
        "141p": "141px",
        "146p": "146px",
        "150p": "150px",
        "160p": "160px",
        "170p": "170px",
        "173p": "173px",
        "180p": "180px",
        "183p": "183px",
        "190p": "190px",
        "200p": "200px",
        "224p": "224px",
        "260p": "260px",
        "297p": "297px",
        "324p": "324px",
        "330p": "330px",
        "345p": "345px",
        "354p": "354px",
        "358p": "358px",
        "360p": "360px",
        "374p": "374px",
        "390p": "390px",
        "458p": "458px",
        "558p": "558px",
        "700p": "700px",
        "1180p": "1180px",
      },

      colors: {
        primary: {
          black: "#1D1D1B",
          50: "#231F20",
          100: "#383737",
          150: "#757575ff", //gray
          200: "#a11321ff", //osjecko crvena
          250: "#EBEBEB", //osjecko input telefon
          300: "#AAAAAA", //osjecko sken siva
          400: "#EBEBEB", //osjecko pozadina siva
          500: "#FF001B", // osjecko error
        },
        fButton: "#1877F2",
        aButton: "#000000",
        borderColor: "#EBEBEB",
        borderInput: "#DEAA54",
        labelName: "#DEAA54",
        tel: "#A11322",
        errorMessage: "#ff3333",
        trackingGreen: "#0A752E",
       
      },
      backgroundImage: {
        linearGradient:
        "linear-gradient(90deg, #BD8B2E 22.07%, #E8D476 36.51%, #BF9B3A 49.98%, #E8D370 68.27%, #DFC667 87.52%, #EDD97D 118.32%)", //zlatni linear gradient
      },

      boxShadow: {
        custom: "0px 2px 20px 0px #00000080",
        "custom-md":
          "0px 2px 3px 0px rgba(0, 0, 0, 0.2), 0px 0px 3px 0px rgba(0, 0, 0, 0.15)",
        "custom-input": "0 0 0 1000px white inset;",
      },

      fontSize: {
        "12p": "12px",
        "14p": "14px",
        "18p": "18px",
        "20p": "20px",
        "23p": "23px",
        "28p": "28px",
        "32p": "32px",
        "34p": "34px",
        "35p": "35px",
        "44p": "44px",
        "55p": "55px",
      },
      lineHeight: {
        "14p": "14px",
        "16p": "16px",
        "17p": "17px",
        "19p": "19px",
        "20p": "20px",
        "22p": "22px",
        "24p": "24px",
        "25p": "25px",
        "26p": "26px",
        "28p": "28px",
        "34p": "34px",
        "42p": "42px",
        "52p": "52px",
        "62p": "62px",
      },
      borderRadius: {
        "4p": "4px",
        "6p": "6px",
        "8p": "8px",
        "10p": "10px",
        "15p": "15px",
        "56p": "56px",
      },
      spacing: {
        "0.5p": "0.5px",
        "1p": "1px",
        "2p": "2px",
        "4p": "4px",
        "5p": "5px",
        "6p": "6px",
        "8p": "0.5rem",
        "10p": "0.625rem",
        "11p": "0.687rem",
        "12p": "0.75rem",
        "14p": "0.875rem",
        "15p": "0.94rem",
        "16p": "1rem",
        "17p": "17px",
        "18p": "1.125rem",
        "20p": "1.25rem",
        "22p": "1.375rem",
        "24p": "1.5rem",
        "26p": "1.625rem",
        "28p": "1.75rem",
        "30p": "30px",
        "32p": "2rem",
        "34p": "2.125rem",
        "36p": "2.25rem",
        "38p": "2.375rem",
        "40p": "2.5rem",
        "41p": "2.51rem",
        "42p": "2.625rem",
        "44p": "2.75rem",
        "45p": "2.735rem",
        "46p": "2.875rem",
        "49p": "3.1rem",
        "50p": "3.125rem",
        "52p": "3.25rem",
        "54p": "3.375rem",
        "56p": "3.5rem",
        "57p": "3.562rem",
        "58p": "3.625rem",
        "60p": "3.75rem",
        "62p": "3.875rem",
        "64p": "4rem",
        "65p": "4.1rem",
        "69p": "4.3125rem",
        "70p": "4.375rem",
        "72p": "4.5rem",
        "74p": "4.625rem",
        "77p": "4.82rem",
        "78p": "4.875rem",
        "80p": "5rem",
        "82p": "5.125rem",
        "84p": "5.25rem",
        "86p": "5.375rem",
        "90p": "5.625rem",
        "92p": "5.75rem",
        "96p": "6rem",
        "100p": "6.25rem",
        "105p": "6.625rem",
        "112p": "7rem",
        "116p": "7.25rem",
        "120p": "7.5rem",
        "125p": "7.82rem",
        "128p": "8rem",
        "130p": "8.125rem",
        "132p": "8.25rem",
        "134p": "8.375rem",
        "136p": "8.5rem",
        "142p": "8.875rem",
        "162p": "10.125rem",
        "164p": "10.25rem",
        "170p": "10.625rem",
        "174p": "10.875rem",
        "175p": "10.95rem",
        "180p": "11.25rem",
        "182p": "11.375rem",
        "184p": "11.5rem",
        "192p": "12rem",
        "198p": "12.375rem",
        "200p": "12.5rem",
        "204p": "10.5vw",
        "212p": "13.25rem",
        "210p": "13.125rem",
        "221p": "13.81rem",
        "244p": "15.25rem",
        "272p": "17rem",
        "282p": "17.625rem",
        "286p": "17.875rem",
        "288p": "18rem",
        "304p": "19rem",
        "322p": "20.125rem",
        "332p": "20.75rem",
        "356p": "22.25rem",
        "363p": "22.7rem",
        "374p": "374px",
        "393p": "24.56rem",
        "400p": "25rem",
        "420p": "26.25rem",
        "432p": "27rem",
        "444p": "27.75rem",
        "450p": "28.125rem",
        "487p": "487px",
        "497p": "31.0625rem",
        "500p": "31.25rem",
        "514p": "32.125rem",
        "534p": "33.375rem",
        "556p": "34.75rem",
        "598p": "37.375rem",
        "652p": "40.75rem",
        "700p": "43.75rem",
        "745p": "46.56rem",
        "770p": "48.125rem",
        "850p": "53.75rem",
        "860p": "53.75rem",
        "880p": "55rem",
        "908p": "56.75rem",
        "1058p": "1058px",
        "1374p": "1374px",
        "1436p": "1436px",
        "48p": "3rem",
        "1/2": "50%",
        "1/8": "12.5%",
        "2/8": "25%",
        "3/8": "37.5%",
        "85%": "85%",
      },
      zIndex: {
        1: 1,
        9: 9,
        99: 99,
        999: 999,
        9999: 9999,
        99999: 99999,
      },
      listStyleImage: {
        checkmark: 'url("/assets/icons/list-circle.svg")',
      },
    },
  },
  plugins: [],
};
