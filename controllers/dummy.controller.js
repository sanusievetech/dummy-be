const { dummyTicket } = require("../mock/ticket");

exports.getAllTicket = async (_, res) => {
    return res.json(dummyTicket);
};

exports.getTicketById = async (req, res) => {
    const filteredData = dummyTicket.find(item => item.ticketId === req.params.id);

    if (filteredData) {
        return res.json(filteredData);
    } else {
        res.status(400).send("Data not found!");
    }
};