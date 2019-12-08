const { admin } = require("../util/admin");

exports.getQuizResults = (req, res) => {
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
      });
    });
    return res.json(quizResults);
  })
  .catch(err => console.error(err));
};

exports.saveQuizResults = (req, res) => {

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