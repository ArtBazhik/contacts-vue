import {createStore} from 'vuex'

export default createStore({
  state: {
    contacts: [
      {
        id: 48375893498,
        firstName: 'Artem',
        secondName: 'Korovkin',
        lastName: 'Vyacheslavovich',
        contactPhone: '8 999 777 33 22',
        rowsInfo: []
      }
    ],
  },
  mutations: {
    SET_CONTACT: (state, newContact) => {
      state.contacts.unshift(newContact)
    },
    DEL_CONTACT: (state, idxItem) => {
      state.contacts.splice(idxItem, 1)
    },
    DEL_ROW: (state, id) => {
      state.contacts.find(item => {
        let rowContact = item.rowsInfo
        rowContact.find((item, i, rowContact) => {
          if(item.id === id) {
            rowContact.splice(i, 1)
          }
        })
      })
    },
    SET_NEW_ROW: (state, newRow) => {
      state.contacts.map(item => {
        if(item.id === newRow.idUrl) {
          item.rowsInfo.push(newRow.newRow)
        }
      })
    }
  },
  actions: {
    POST_CONTACT: ({commit}, newContact) => {
      commit('SET_CONTACT', newContact)
    },
    DELETE_CONTACT: ({commit}, idxItem) => {
      commit('DEL_CONTACT', idxItem)
    },
    DELETE_ROW_CONTACT: ({commit}, id) => {
      commit('DEL_ROW', id)
    },
    ADD_ROWS_CONTACT: ({commit}, newRow) => {
      commit('SET_NEW_ROW', newRow)
    },
    CREATE_ROWS: ({commit}, payload) => {
      console.log(payload);
    }
  },
  getters: {
    ALL_CONTACTS: state => state.contacts,
    CONTACT_INFO: state => id => {
      return state.contacts.find(item => item.id === id)
    },
    ROWS_CONTACT: state => id => {
      return state.contacts.find(item => item.id === id).rowsInfo
    }
  },
})
