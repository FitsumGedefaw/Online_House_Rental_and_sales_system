const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tenantSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    image: String,
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      defaut: "",
    },
    subCity: {
      type: String,
      defaut: "",
    },
    woreda: {
      type: String,
      defaut: "",
    },
    kebele: {
      type: String,
      defaut: "",
    },
    phone: {
      type: String,
      defaut: "",
    },

    applicationId: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Applicant",
      },
    ],
    saleId: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Sale",
      },
    ],
    rentId: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Rent",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Tenant", tenantSchema);
