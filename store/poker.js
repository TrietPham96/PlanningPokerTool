export const state = () => ({
    memberList: [
        {
            Id: "1",
            MemberName: "David",
            IsActive: true,
            Result: 0,
            IsTurn: false,
        },
        {
            Id: "2",
            MemberName: "John",
            IsActive: true,
            Result: 0,
            IsTurn: false,
        },
        {
            Id: "3",
            MemberName: "Tom",
            IsActive: true,
            Result: 0,
            IsTurn: false,
        },
        {
            Id: "4",
            MemberName: "Evan",
            IsActive: true,
            Result: 0,
            IsTurn: false,
        },
        {
            Id: "5",
            MemberName: "Robin",
            IsActive: true,
            Result: 0,
            IsTurn: false,
        },
        {
            Id: "6",
            MemberName: "Alex",
            IsActive: true,
            Result: 0,
            IsTurn: false,
        },
        {
            Id: "7",
            MemberName: "Cathy",
            IsActive: true,
            Result: 0,
            IsTurn: false,
        },
        {
            Id: "8",
            MemberName: "Adam",
            IsActive: true,
            Result: 0,
            IsTurn: false,
        },
        {
            Id: "9",
            MemberName: "Johnson",
            IsActive: true,
            Result: 0,
            IsTurn: false,
        },
        {
            Id: "10",
            MemberName: "Chris",
            IsActive: true,
            Result: 0,
            IsTurn: false,
        },
    ]
})

export const mutations = {
    add(state, text) {
        state.list.push({
            text,
            done: false,
            id: Date.now()
        })
    },
    remove(state, todo) {
        state.list = state.list.filter(item => item.id !== todo.id)
    },
    toggle(state, todo) {
        todo.done = !todo.done
    }
}