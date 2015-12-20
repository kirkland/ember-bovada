import Ember from 'ember';

let hands = [
  {
    id: "3180680492",
    table_id: "10239001",
    time: "2015-11-26 20:22:07",
    players: [
      {
        name: "Seat 2",
        position: "Big Blind",
        me: true,
        stack: 737,
        hole_cards: "8h Qc"
      },
      {
        name: "Seat 4",
        position: "UTG",
        me: false,
        stack: 849,
        hole_cards: "Kc As"
      },
      {
        name: "Seat 5",
        position: "Dealer",
        me: false,
        stack: 459,
        hole_cards: "Td 9s"
      }
    ]
  }
];

export default Ember.Route.extend({
  model() {
    return hands;
  }
});
