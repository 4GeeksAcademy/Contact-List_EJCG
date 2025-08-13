export const initialStore = () => {
  return {
    contacts: [

    ]
  }
}

export default function storeReducer(store = initialStore(), action = {}) {


  switch(action.type) {
    case "load_data":
      return {
        ...store,
        contacts: action.contacts,
      };
    case "add_contact":
      return {
        ...store,
        contacts: [...store.contacts, action.payload],
      };
    case "edit_contact":
      return {
        ...store,
        contacts: store.contacts.map(contact => contact.id === 
          action.payload.id ? action.payload : contact
        ),
      };
    case "delete_contact":
      return {
        ...store,
        contacts: store.contacts.filter(contact => contact.id !== action.payload.id),
      };

    default: return store;
  }

}