const {admin, db} = require("../util/admin");

exports.getAllQuizResults = (req, res) => {
  admin.firestore().collection('quizResults')
  .orderBy('finishedAt', 'desc')
  .get()
  .then(data => {
    let quizResults = [];
    data.forEach(doc => {
      quizResults.push({
        quizResultId: doc.id,
        userHandle: doc.data().userHandle,
        className: doc.data().className,
        quizNumber: doc.data().quizNumber,
        quizScore: doc.data().quizScore,
        finishedAt: doc.data().finishedAt,
        userImage: doc.data().userImage
      });
    });
    return res.json(quizResults);
  })
  .catch(err => console.error(err));
};

exports.saveQuizResult = (req, res) => {
  const newQuizResult = {
    userHandle: req.user.handle,
    quizNumber: req.body.quizNumber,
    quizScore: req.body.quizScore,
    className: req.body.className,
    finishedAt: new Date().toISOString()
  };

  admin.firestore().collection('quizResults')
    .add(newQuizResult)
    .then(doc => {
      res.json({ message: `Quiz result ${doc.id} saved succesfully` });
    })
    .catch(err => {
      res.status(500).json({ error: 'Something went wrong!' });
      console.error(err);
    });
};

exports.getQuizResult = (req, res) => {
  let quizResult = {};
  db.doc(`/quizResults/${req.params.quizResultId}`).get()
    .then(doc => {
      if (!doc.exists) {
        return res.status(404).json({error: 'Quiz not found'});
      }
      quizResult = doc.data();
      quizResult.quizResultId = doc.id;
      return res.json(quizResult);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({error: err.code});
    })
};