var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://LukaszJeziors:lukes1992@ds127962.mlab.com:27962/listazadan', ['zadania']);

router.get('/zadania', function(req, res, next){
    db.zadania.find(function(err,zadania){
      if(err){
        res.send(err);
      }
      res.json(zadania);
    });
});

// pojedyncze
router.get('/zad/:id', function(req, res, next){
    db.zadania.findOne({_id: mongojs.ObjectId(req.params.id)}, function(err, zad){
        if(err){
            res.send(err);
        }
        res.json(zad);
    });
});
//do zapisu
router.post('/zad',function(req,res,next){
  var zad = req.body;
  if(!zad.tytul || !(zad.JestGotowe+'')){
    res.status(400);
    res.json({
      "error":"zle dane w poscie"
    });
  }else {
    db.zadania.save(zad, function(err,zad){
      if(err){
          res.send(err);
      }
      res.json(zad);
    });
  }
});

// pojedyncze delete
router.delete('/zad/:id', function(req, res, next){
    db.zadania.remove({_id: mongojs.ObjectId(req.params.id)}, function(err, zad){
        if(err){
            res.send(err);
        }
        res.json(zad);
    });
});
//upadte

router.put('/zad/:id', function(req, res, next){
    var zad = req.body;
    var updTask = {};

    if(zad.JestGotowe){
        updTask.JestGotowe = zad.JestGotowe;
    }

    if(zad.tytul){
        updTask.tytul = zad.tytul;
    }

    if(!updTask){
        res.status(400);
        res.json({
            "error":"zle dane z update"
        });
    } else {
        db.zadania.update({_id: mongojs.ObjectId(req.params.id)},updTask, {}, function(err, zad){
        if(err){
            res.send(err);
        }
        res.json(zad);
    });
    }
});

module.exports = router;
