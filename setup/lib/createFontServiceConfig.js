"use strict";
exports.__esModule = true;
exports.createFontServiceConfig = void 0;
exports.createFontServiceConfig = function (allFonts, selectedFonts, name) {
    var fonts = {};
    for (var _i = 0, allFonts_1 = allFonts; _i < allFonts_1.length; _i++) {
        var font = allFonts_1[_i];
        if (selectedFonts.length === 0 || selectedFonts.includes(font.id)) {
            fonts[font.id] = font;
        }
    }
    return {
        version: 'v1',
        name: name && name.trim().length > 0 ? name.trim() : 'Fontless',
        type: 'varld-fontless-config',
        fonts: fonts
    };
};
