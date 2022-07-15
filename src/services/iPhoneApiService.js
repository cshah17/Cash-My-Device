import API from './api'

const BASE_URL = process.env.REACT_APP_URL_PATH;

export const iPhoneApi = (data) => {
    return API.get(BASE_URL + `/api/iphoneapi?capacity=${data.capacity}&carrier=${data.carrier}&iphone_model=${data.iphone_model}&condition=${data.condition}`)
}

export const iPadApi = (capacity, carrier, iphone_model, condition, ipad_screensize, ipad_generation) => {
    return API.get(BASE_URL + `/api/ipadapi?ipad_capacity=${capacity}&ipad_carrier=${carrier}&ipad_model=${iphone_model}&ipad_condition=${condition}&ipad_screensize=${ipad_screensize}&ipad_generation=${ipad_generation}`)
}

export const mackBookApi = (data) => {
    return API.get(BASE_URL + `/api/macbookapi/?macbook_model=${data.macbook_model}&screen_size=${data.screen_size}&year=${data.year}&processer=${data.processer}&cosmetic_condition=${data.cosmetic_condition}&ram_capacity=${data.ram_capacity}&storage_capacity=${data.storage_capacity}&battery_health=${data.battery_health}&macbook_functional=${data.macbook_functional}&macbook_powercord=${data.macbook_powercord}&graphics_card=${data.graphics_card}&touch=${data.touch}`)
}

export const androidApi = (data) => {
    return API.get(BASE_URL + `/api/samsungapi/?samsung_model=${data.samsung_model}&samsung_carrier=${data.samsung_carrier}&samsung_condition=${data.samsung_condition}&samsung_functional=${data.samsung_functional}&samsung_powercord=${data.samsung_powercord}&samsung_box=${data.samsung_box}&samsung_headset=${data.samsung_headset}&samsung_isunlock=${data.samsung_isunlock}&samsung_screenburn=${data.samsung_screenburn}`)
}

export const googleApi = (data) => {
    return API.get(BASE_URL + `/api/googleapi/?google_model=${data.google_model}&google_capacity=${data.google_capacity}&google_carrier=${data.google_carrier}&google_condition=${data.google_condition}&google_functional=${data.google_functional}&google_powercord=${data.google_powercord}&google_box=${data.google_box}&google_headset=${data.google_headset}`)
}

export const iPodApi = (airpods_model, charging_case, airpods_condition) => {
    return API.get(BASE_URL + `/api/airpodsapi/?airpods_model=${airpods_model}&charging_case=${charging_case}&airpods_condition=${airpods_condition}`)
}

export const iWatch = (data) => {
    const {
        label: iwatch_model,
        iwatch_carrier,
        iwatch_edition_casing,
        iwatch_size,
        iwatch_band,
        condition: iwatch_condition,
        iwatch_functional,
        iwatch_powercord,
        iwatch_box
    } = data;
    return API.get(BASE_URL + `/api/iwatchapi/?iwatch_model=${iwatch_model}&iwatch_carrier=${iwatch_carrier}&iwatch_edition_casing=${iwatch_edition_casing}&iwatch_size=${iwatch_size}&iwatch_band=${iwatch_band}&iwatch_condition=${iwatch_condition}&iwatch_functional=${iwatch_functional}&iwatch_powercord=${iwatch_powercord}&iwatch_box=${iwatch_box}`)
}

