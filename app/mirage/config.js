export default function() {
  this.get('/hands', function() {
    return {
      data: [{
        type: 'hands',
        id: "3180680492",
        attributes: {
          tableId: "10239001",
          time: "2015-11-26 20:22:07"
        }
      }]
    };
  });
}
