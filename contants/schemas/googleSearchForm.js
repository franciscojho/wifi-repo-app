import * as yup from "yup"

const googleSearchForm = yup.object({
    wifiSpotName: yup
        .string("Enter the wifi spot name")
        .required("This field is required"),
    wifiSpotPassword: yup
        .string("Enter the wifi spot password")
        .required("This field is required"),
    wifiSpotAddress: yup
        .string("Enter the wifi spot address")
        .required("This field is required"),
})

export default googleSearchForm
