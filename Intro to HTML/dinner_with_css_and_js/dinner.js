new Vue({
    el: '#app',
    data: {
        selectedGuest: null,
        guests: [
            {id: 0, name: 'Chris'},
            {id: 1, name: 'Ruthie'},
            {id: 2, name: 'Lily'}
        ],
        drinks: [
            {guestId: 0, name: 'British Bitter'},
            {guestId: 1, name: 'Hefeweizen'},
            {guestId: 2, name: 'Orange Juice'}
        ],
        food: {
            appetizers: [
                {name: 'Wings'},
                {name: 'Gyoza'},
            ],
            entrees: [
                {guestId: 1, name: 'Tofu Curry'},
                {guestId: 2, name: "Mac 'n Cheese"},
                {guestId: 0, name: 'Steak Fajitas'}
            ],
            desserts: [
                {guestId: 1, name: 'Ice Cream'},
                {guestId: 2, name: 'Cookie'},
                {guestId: 0, name: 'Sorbet'}
            ]
        }
    },
    methods: {
        showGuestsItems (guestId) {
            if (guestId === this.selectedGuest) {
                this.selectedGuest = null
            } else {
                this.selectedGuest = guestId
            }
        },
        selectedItem (guestId) {
            return {
                selected: guestId === this.selectedGuest
            }
        }
    }
})