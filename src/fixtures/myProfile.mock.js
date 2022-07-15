export default {
    profileData: {
        contactnumber: '9874568889',
        secondaryemail: 'demo@gmail.com',
        username: 'admin',
        firstname: 'Admin123',
        lastname: 'demo',
        email: 'admin@gmail.com',
        useraddress: [
            {
                address1: "add1",
                address2: "add2",
                city: "surat",
                state: "state",
                zipCode: "395010",
                primaryAddress: true
            }, {
                address1: "add12",
                address2: "add22",
                city: "city",
                state: "state",
                zipCode: "395010",
                primaryAddress: false}
        ],

    },
    myOrderTrade: [
        { id: 1, productName: "phone", status: 'shipping label sent', date: "7-2-2020", amount: "20000" },
        { id: 2, productName: "watch", status: 'order placed', date: "8-2-2020", amount: "1000" },
        { id: 3, productName: "Mobile cover", status: 'payment processed', date: "7-1-2020", amount: "3000" },
        { id: 4, productName: "Charger", status: 'shipping received', date: "7-12-2019", amount: "5000" }
    ]
};
