//TODO: color vem da api
const theme = {
  colors: {
    ahg_page_background_color: '#ECECF0',
    ahg_gray_base: '#888888',
    ahg_gray_darken1: '#666666',
    ahg_gray_darken2: '#444444',
    ahg_gray_darken3: '#333333',
    ahg_gray_lighten1: '#aaaaaa',
    ahg_gray_lighten2: '#cccccc',
    ahg_gray_lighten3: '#dddddd',
    ahg_gray_lighten4: '#eeeeee',
    ahg_gray_lighten5: '#f9f9f9',
    ahg_waterloo_base: '#78788f',
    ahg_waterloo_darken1: '#58586b',
    ahg_waterloo_darken2: '#3a3a45',
    ahg_waterloo_darken3: '#2a2a33',
    ahg_waterloo_lighten1: '#9d9dae',
    ahg_waterloo_lighten2: '#c2c2cd',
    ahg_waterloo_lighten3: '#d5d5dc',
    ahg_waterloo_lighten4: '#e7e7eb',
    ahg_waterloo_lighten5: '#f4f4f6',
    ahg_blue_base: '#1166cc',
    ahg_blue_darken1: '#0c478d',
    ahg_blue_darken2: '#07274e',
    ahg_blue_darken3: '#04182f',
    ahg_blue_lighten1: '#3388ee',
    ahg_blue_lighten2: '#72adf3',
    ahg_blue_lighten3: '#91bff6',
    ahg_blue_lighten4: '#b0d1f8',
    ahg_blue_lighten5: '#c5ddfa',
    ahg_cyan_base: '#1199dd',
    ahg_cyan_darken1: '#0c6d9e',
    ahg_cyan_darken2: '#07425f',
    ahg_cyan_darken3: '#052c3f',
    ahg_cyan_lighten1: '#42b6f0',
    ahg_cyan_lighten2: '#81cef5',
    ahg_cyan_lighten3: '#a0dbf8',
    ahg_cyan_lighten4: '#c0e7fa',
    ahg_cyan_lighten5: '#d5effc',
    ahg_green_base: '#22bb44',
    ahg_green_darken1: '#18812f',
    ahg_green_darken2: '#0d481a',
    ahg_green_darken3: '#082b10',
    ahg_green_lighten1: '#44dd66',
    ahg_green_lighten2: '#7ee795',
    ahg_green_lighten3: '#9aedad',
    ahg_green_lighten4: '#b7f2c4',
    ahg_green_lighten5: '#caf5d4',
    ahg_yellow_base: '#ffbb00',
    ahg_yellow_darken1: '#bb8900',
    ahg_yellow_darken2: '#775700',
    ahg_yellow_darken3: '#553e00',
    ahg_yellow_lighten1: '#ffcd44',
    ahg_yellow_lighten2: '#ffdf88',
    ahg_yellow_lighten3: '#ffe8aa',
    ahg_yellow_lighten4: '#fff1cc',
    ahg_yellow_lighten5: '#fff7e3',
    ahg_orange_base: '#ff5500',
    ahg_orange_darken1: '#bb3e00',
    ahg_orange_darken2: '#772800',
    ahg_orange_darken3: '#551c00',
    ahg_orange_lighten1: '#ff8244',
    ahg_orange_lighten2: '#ffb088',
    ahg_orange_lighten3: '#ffc6aa',
    ahg_orange_lighten4: '#ffddcc',
    ahg_orange_lighten5: '#ffece3',
    ahg_red_base: '#dd1818',
    ahg_red_darken1: '#a01111',
    ahg_red_darken2: '#620b0b',
    ahg_red_darken3: '#440707',
    ahg_red_lighten1: '#ec4d4d',
    ahg_red_lighten2: '#f28b8b',
    ahg_red_lighten3: '#f6a9a9',
    ahg_red_lighten4: '#f9c8c8',
    ahg_red_lighten5: '#fbdcdc',
    ahg_magenta_base: '#ee1155',
    ahg_magenta_darken1: '#af0c3e',
    ahg_magenta_darken2: '#6f0828',
    ahg_magenta_darken3: '#4f061c',
    ahg_magenta_lighten1: '#f35082',
    ahg_magenta_lighten2: '#f790b0',
    ahg_magenta_lighten3: '#f9b0c6',
    ahg_magenta_lighten4: '#fccfdd',
    ahg_magenta_lighten5: '#fde4ec',
    ahg_purple_base: '#444499',
    ahg_purple_darken1: '#2f2f6a',
    ahg_purple_darken2: '#1a1a3b',
    ahg_purple_darken3: '#101023',
    ahg_purple_lighten1: '#6666bb',
    ahg_purple_lighten2: '#9595d0',
    ahg_purple_lighten3: '#adadda',
    ahg_purple_lighten4: '#c4c4e5',
    ahg_purple_lighten5: '#d4d4ec',
    ahg_primary_base: '#1199dd',
    ahg_primary_darken1: '#0c6d9e',
    ahg_primary_darken2: '#07425f',
    ahg_primary_darken3: '#052c3f',
    ahg_primary_lighten1: '#42b6f0',
    ahg_primary_lighten2: '#81cef5',
    ahg_primary_lighten3: '#a0dbf8',
    ahg_primary_lighten4: '#c0e7fa',
    ahg_primary_lighten5: '#d5effc',
    ahg_secondary_base: '#78788f',
    ahg_secondary_darken1: '#58586b',
    ahg_secondary_darken2: '#3a3a45',
    ahg_secondary_darken3: '#2a2a33',
    ahg_secondary_lighten1: '#9d9dae',
    ahg_secondary_lighten2: '#c2c2cd',
    ahg_secondary_lighten3: '#d5d5dc',
    ahg_secondary_lighten4: '#e7e7eb',
    ahg_secondary_lighten5: '#f4f4f6',
    ahg_accent_base: '#ee1155',
    ahg_accent_darken1: '#af0c3e',
    ahg_accent_darken2: '#6f0828',
    ahg_accent_darken3: '#4f061c',
    ahg_accent_lighten1: '#f35082',
    ahg_accent_lighten2: '#f790b0',
    ahg_accent_lighten3: '#f9b0c6',
    ahg_accent_lighten4: '#fccfdd',
    ahg_accent_lighten5: '#fde4ec',
    ahg_success_base: '#22bb44',
    ahg_success_darken1: '#18812f',
    ahg_success_darken2: '#0d481a',
    ahg_success_darken3: '#082b10',
    ahg_success_lighten1: '#44dd66',
    ahg_success_lighten2: '#7ee795',
    ahg_success_lighten3: '#9aedad',
    ahg_success_lighten4: '#b7f2c4',
    ahg_success_lighten5: '#caf5d4',
    ahg_warning_base: '#ffbb00',
    ahg_warning_darken1: '#bb8900',
    ahg_warning_darken2: '#775700',
    ahg_warning_darken3: '#553e00',
    ahg_warning_lighten1: '#ffcd44',
    ahg_warning_lighten2: '#ffdf88',
    ahg_warning_lighten3: '#ffe8aa',
    ahg_warning_lighten4: '#fff1cc',
    ahg_warning_lighten5: '#fff7e3',
    ahg_info_base: '#1166cc',
    ahg_info_darken1: '#0c478d',
    ahg_info_darken2: '#07274e',
    ahg_info_darken3: '#04182f',
    ahg_info_lighten1: '#3388ee',
    ahg_info_lighten2: '#72adf3',
    ahg_info_lighten3: '#91bff6',
    ahg_info_lighten4: '#b0d1f8',
    ahg_info_lighten5: '#c5ddfa',
    ahg_error_base: '#dd1818',
    ahg_error_darken1: '#a01111',
    ahg_error_darken2: '#620b0b',
    ahg_error_darken3: '#440707',
    ahg_error_lighten1: '#ec4d4d',
    ahg_error_lighten2: '#f28b8b',
    ahg_error_lighten3: '#f6a9a9',
    ahg_error_lighten4: '#f9c8c8',
    ahg_error_lighten5: '#fbdcdc',
  },
  fonts: {
    regular: 'OpenSans-Regular',
    bold: 'OpenSans-Bold',
    extrabold: 'OpenSans-ExtraBold',
    semibold: 'OpenSans-SemiBold',
    light: 'OpenSans-Light',
  }
};

export default theme;
