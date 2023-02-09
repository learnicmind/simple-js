const student = {
    name: 'Ariful Islam',
    id: 7378,
    address: 'Noakhali',
    isSingle: false,
    friends: ['Khaled', 'Tarek', 'Milon', 'Mamun'],
    movies: [{name: 'Mon boshena porar table a', year: 2022},{name: 'pagla hawa', year: '2022'}],
    acting: function(){
        console.log('acting like sakib khan')
    },
    car: {
        brand: 'tesla',
        price: 3838838,
        made: 2025,
        manufacturer: {
            name: 'tesla',
            ceo: 'Elon Mask',
        }
    }
}

console.log(student.acting);
student.acting();