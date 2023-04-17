const router = require("express").Router();
const { Filmmaker } = require("../db");

router.get("/filmmakers", async (req, res, next) => {
  try {
    const filmmakers = await Filmmaker.findAll({
      attributes: ["id", "fullName"],
    });
    res.json(filmmakers);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const filmmaker = await Filmmaker.findByPk(req.params.id);
    if (!filmmaker) {
      const error = new Error(`Filmmaker with id ${req.params.id} not found`);
      error.status = 404;
      throw error;
    }
    res.json(filmmaker);
  } catch (err) {
    next(err);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const filmmakers = await Filmmaker.findAll();
    res.json(filmmakers);
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const filmmaker = await Filmmaker.findByPk(req.params.id);
    if (!filmmaker) {
      const error = new Error(`Filmmaker with id ${req.params.id} not found`);
      error.status = 404;
      throw error;
    }
    await filmmaker.destroy();
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const filmmaker = await Filmmaker.findByPk(req.params.id);
    if (!filmmaker) {
      const error = new Error(`Filmmaker with id ${req.params.id} not found`);
      error.status = 404;
      throw error;
    }
    const { fullName, email, image, yearsOfExperience } = req.body;
    filmmaker.fullName = fullName || filmmaker.fullName;
    filmmaker.email = email || filmmaker.email;
    filmmaker.image = image || filmmaker.image;
    filmmaker.yearsOfExperience =
      yearsOfExperience || filmmaker.yearsOfExperience;
    await filmmaker.save();
    res.json(filmmaker);
  } catch (err) {
    next(err);
  }
});

module.exports = router;

//     res.json(filmmaker);
//   } catch (err) {
//     next(err);
//   }
// });

// router.get("/", async (req, res, next) => {
//   try {
//     const filmmakers = await Filmmaker.findAll();
//     res.json(filmmakers);
//   } catch (err) {
//     next(err);
//   }
// });

// router.delete("/:id", async (req, res, next) => {
//   try {
//     const filmmaker = await Filmmaker.findByPk(req.params.id);
//     if (!filmmaker) {
//       const error = new Error(`Filmmaker with id ${req.params.id} not found`);
//       error.status = 404;
//       throw error;
//     }
//     await filmmaker.destroy();
//     res.sendStatus(204);
//   } catch (err) {
//     next(err);
//   }
// });

// router.put("/:id", async (req, res, next) => {
//   try {
//     const filmmaker = await Filmmaker.findByPk(req.params.id);
//     if (!filmmaker) {
//       const error = new Error(`Filmmaker with id ${req.params.id} not found`);
//       error.status = 404;
//       throw error;
//     }
//     const { fullName, email, image, yearsOfExperience } = req.body;
//     filmmaker.fullName = fullName || filmmaker.fullName;
//     filmmaker.email = email || filmmaker.email;
//     filmmaker.image = image || filmmaker.image;
//     filmmaker.yearsOfExperience =
//       yearsOfExperience || filmmaker.yearsOfExperience;
//     await filmmaker.save();
//     res.json(filmmaker);
//   } catch (err) {
//     next(err);
//   }
// });

// module.exports = router;
