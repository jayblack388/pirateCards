import axios from "axios";

export default {
  // Gets all pirates
  getPirates: function() {
    return axios.get("/api/pirates");
  },
  getPirateCrew: function(crew) {
    return axios.get("/api/pirates/" + crew)
  },
  // Gets the pirate with the given id
  getPirate: function(id) {
    return axios.get("/api/pirates/" + id);
  },
  // Deletes the pirate with the given id
  deletePirate: function(id) {
    return axios.delete("/api/pirates/" + id);
  },
  // Saves a pirate to the database
  savePirate: function(pirateData) {
    return axios.post("/api/pirates", pirateData);
  }
};
