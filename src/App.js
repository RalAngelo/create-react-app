import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './component/header';
import Header2 from './component/header2';
import MotherSquare from './component/motherSquare';
import Refresh from './component/refresh';
import Calculate from './component/calculate';
import SikidyGenerate from './page/manerakaPage';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import HomeImgButton from './page/homeImg';
import TsyHitaMasoComponent from './page/manerakaTsyHitaMasoPage';
import FourComponent from './page/fourCircleComponent';
import FourComponentC from './page/FourComponentColumn';
import Underline from './page/underline';
import FourComponentC2 from './page/FourComponentColumn2';
import FourComponent2 from './page/fourCircleComponent2';
import FourComponent3 from './page/fourCircleComponent3';
import FourComponent4 from './page/fourCircleComponent4';
import FourComponentC3 from './page/FourComponentColumn3';
import FourComponentC4 from './page/FourComponentColumn4';
import FourComponentC5 from './page/FourComponentColumn5';
import FourComponentC6 from './page/FourComponentColumn6';
import FourComponent5 from './page/fourCircleComponent5';
import FourComponent6 from './page/fourCircleComponent6';
import FourComponent7 from './page/fourCircleComponent7';
import FourComponent8 from './page/fourCircleComponent8';
import FourComponentC7 from './page/FourComponentColumn7';
import FourComponentC8 from './page/FourComponentColumn8';
import InfiniteBoutton from './page/infiniteButtton';
import Inverse from './component/inverse';

function App() {
  /* 
  Notre Sikidy mère et represené par un tableau à 16 élèments, dont Tale_1 et representer par l' index du tableau 
  numero ((index-1)*4)+4, qui est ègale à 4 si l' index est initialisé à index = 0; après pour index = 1
  tale_2 c'est sur l' index 8...  
  */

  const [data, setData] = useState([...Array(16)]);
  const [dataEightDown, setDataEightDown] = useState([...Array(80)])
  const [dataEightDown2, setDataEightDown2] = useState([...Array(80)])
  const [activeSquare, setActiveSquare] = useState([4]);
  const [isReseted, setIsReseted] = useState(true);
  const [elementToShake, setElementToShake] = useState(4);
  const [shakeNextItem, setShakeNextItem] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const maneraka = () =>{
    /* fahavalo + alisay = fahasivy 
       abily + fianaha = haja
       bilady + fahatelo = sorota
       tale + maly = safary
       fahasivy + haja = ombiasa
       sorota + safary = sely
       sely + ombiasa = haky
       haky + tale = kiba
    */
   // Initialisation des 16 maisons
   var tale = [0, 0, 0, 0];
   var maly = [0, 0, 0, 0];
   var fahatelo = [0, 0, 0, 0];
   var bilady = [0, 0, 0, 0];
   var fianaha = [0, 0, 0, 0];
   var abily = [0, 0, 0, 0];
   var alisay = [0, 0, 0, 0];
   var fahavalo = [0, 0, 0, 0];
   var fahasivy = [0, 0, 0, 0];
   var ombiasa = [0, 0, 0, 0];
   var haja = [0, 0, 0, 0]
   var haky = [0, 0, 0, 0]
   var sorota = [0, 0, 0, 0]
   var sely = [0, 0, 0, 0]
   var safary = [0, 0, 0, 0]
   var kiba = [0, 0, 0, 0]
   //construction Tale
   for(var i=0; i<=3; i++){
    tale[i] = data[(i*4)+4]
   }

   //construction Maly
   for(var i=0; i<=3; i++){
    maly[i] = data[(i*4)+3]
   }

   //construction fahatelo
   for(var i=0; i<=3; i++){
    fahatelo[i] = data[(i*4)+2]
   } 

   //construction bilady
   for(var i=0; i<=3; i++){
    bilady[i] = data[(i*4)+1]
   }

   //construction fianaha
   for(var i=0; i<=3; i++){
    fianaha[i] = data[4-i]
   }

   //construction abily
   for(var i=0; i<=3; i++){
    abily[i] = data[8-i]
   }

   //construction alisay
   for(var i=0; i<=3; i++){
    alisay[i] = data[12-i]
   }

   //construction fahavalo
   for(var i=0; i<=3; i++){
    fahavalo[i] = data[16-i]
   }

   //construction fahasivy
   for(var i=0; i<=3; i++){
    var container = [0,0,0,0]
    if(fahavalo[i] !== undefined && fahavalo[i] !== null && alisay[i] !== undefined && alisay[i] !== null){
      container[i] = fahavalo[i] + alisay[i]
      if(container[i] === 2 || container[i] === 4){
        fahasivy[i] = 2 
      }if(container[i] === 1 || container[i] === 3){
        fahasivy[i] = 1
      }
    }  
   }

   //construction haja
   for(var i=0; i<=3; i++){
    var container = [0,0,0,0]
    if(abily[i] !== undefined && abily[i] !== null && fianaha[i] !== undefined && fianaha[i] !== null){
      container[i] = fianaha[i] + abily[i]
      if(container[i] === 2 || container[i] === 4){
        haja[i] = 2 
      }if(container[i] === 1 || container[i] === 3){
        haja[i] = 1
      }
    }  
   }

   //construction ombiasa
   for(var i=0; i<=3; i++){
    var container = [0,0,0,0]
    if(haja[i] !== undefined && haja[i] !== null && fahasivy[i] !== undefined && fahasivy[i] !== null){
      container[i] = haja[i] + fahasivy[i]
      if(container[i] === 2 || container[i] === 4){
        ombiasa[i] = 2 
      }if(container[i] === 1 || container[i] === 3){
        ombiasa[i] = 1
      }
    }  
   }

   //construction sorota
   for(var i=0; i<=3; i++){
    var container = [0,0,0,0]
    if(bilady[i] !== undefined && bilady[i] !== null && fahatelo[i] !== undefined && fahatelo[i] !== null){
      container[i] = bilady[i] + fahatelo[i]
      if(container[i] === 2 || container[i] === 4){
        sorota[i] = 2 
      }if(container[i] === 1 || container[i] === 3){
        sorota[i] = 1
      }
    }  
   }

   //construction safary
   for(var i=0; i<=3; i++){
    var container = [0,0,0,0]
    if(tale[i] !== undefined && tale[i] !== null && maly[i] !== undefined && maly[i] !== null){
      container[i] = tale[i] + maly[i]
      if(container[i] === 2 || container[i] === 4){
        safary[i] = 2 
      }if(container[i] === 1 || container[i] === 3){
        safary[i] = 1
      }
    }  
   }

   //construction sely
   for(var i=0; i<=3; i++){
    var container = [0,0,0,0]
      container[i] = sorota[i] + safary[i]
      if(container[i] === 2 || container[i] === 4){
        sely[i] = 2 
      }if(container[i] === 1 || container[i] === 3){
        sely[i] = 1
      }  
   }

   //construction haky
  for(var i=0; i<=3; i++){
    var container = [0,0,0,0]
      container[i] = sely[i] + ombiasa[i]
      if(container[i] === 2 || container[i] === 4){
        haky[i] = 2 
      }if(container[i] === 1 || container[i] === 3){
        haky[i] = 1
      }  
   }

   //construction kiba
   for(var i=0; i<=3; i++){
    var container = [0,0,0,0]
    if(tale[i] !== undefined && tale[i] !== null){
      container[i] = tale[i] + haky[i]
      if(container[i] === 2 || container[i] === 4){
        kiba[i] = 2 
      }if(container[i] === 1 || container[i] === 3){
        kiba[i] = 1
      }
    }  
   }
   const allHouse = [tale, maly, fahatelo, bilady,
                   fianaha, abily, alisay, fahavalo,
                   fahasivy, ombiasa, haja, haky, 
                   sorota, sely, safary, kiba
  ]
  return allHouse
  }
  const searchTabSikidyWithTokana = () =>{
    // les 16 figures
    var asombola = [2,2,2,2]
    var taraiky = [1,1,1,1]
    var adalo = [1,2,1,2]
    var alohotsy = [2,1,2,1]
    var adabarah = [2,2,1,1]
    var alahasaty = [1,1,2,2]
    var renilaza = [1,2,2,2]
    var alakaosy = [2,1,1,1]
    var alimizanda = [1,1,2,1]
    var alaimora = [2,1,2,2]
    var alakarabo = [1,2,1,1]
    var alokola = [1,2,2,1]
    var alatsimay = [2,1,1,2]
    var alibiavotra = [2,2,1,2]
    var alikisy = [2,2,2,1]
    var karija = [1,1,1,2] 
    // Tableau des rohitany convention "Sikidy RaVince"
    var east = [adabarah, alatsimay, alaimora]
    var west = [alikisy, alakaosy, alokola, alohotsy, alakarabo]
    var north = [alibiavotra, renilaza, adalo, karija]
    var south = [asombola, taraiky, alimizanda, alahasaty]

    function isEqual(tableau1, tableau2) {
      if (tableau1.length !== tableau2.length) return false
    
      return tableau1.every((value, index) => value === tableau2[index])
    }

    function searchRohitany(tab){
      for(var i=0; i<east.length; i++){
        if(isEqual(tab, east[i])){
          return 'atsinanana'
        }
      }
      for(var i=0; i<west.length; i++){
        if(isEqual(tab, west[i])){
          return 'andrefana'
        }
      }
      for(var i=0; i<north.length; i++){
        if(isEqual(tab, north[i])){
          return 'avatra'
        }
      }
      for(var i=0; i<south.length; i++){
        if(isEqual(tab, south[i])){
          return 'atsimo'
        }
      }
    }
    function tabRohitany(tab){
      var rohiContain = new Array(tab.length)
      for(var i=0; i<tab.length; i++){
        rohiContain[i] = searchRohitany(tab[i])
      }
      return rohiContain
    }

    function rohiCount(myArray){
      var elementsCounts = {};
      myArray.forEach(element => {
        elementsCounts[element] = (elementsCounts[element] || 0) + 1;
      });
      return elementsCounts
    }

    function tokana(){
      var sikidy = maneraka();
      var index = 0;
      if(rohiCount(tabRohitany(sikidy)).atsinanana === 1){
        index = tabRohitany(sikidy).indexOf('atsinanana')
        for(var i=0; i<=3; i++){
          sikidy[index][i] = sikidy[index][i] + 8
        }
      }
      if(rohiCount(tabRohitany(sikidy)).andrefana === 1){
        index = tabRohitany(sikidy).indexOf('andrefana')
        for(var i=0; i<=3; i++){
          sikidy[index][i] = sikidy[index][i] + 8
        }
      }
      if(rohiCount(tabRohitany(sikidy)).avatra === 1){
        index = tabRohitany(sikidy).indexOf('avatra')
        for(var i=0; i<=3; i++){
          sikidy[index][i] = sikidy[index][i] + 8
        }
      }
      if(rohiCount(tabRohitany(sikidy)).atsimo === 1){
        index = tabRohitany(sikidy).indexOf('atsimo')
        for(var i=0; i<=3; i++){
          sikidy[index][i] = sikidy[index][i] + 8
        }
      }
      return sikidy
    }
    return tokana()
  }

  const shakeItem = (value) => {
    setShakeNextItem(value)
  }

  const resetSquare = () =>{
    const resetedData = [...Array(16)]
    setData(resetedData)
    setActiveSquare([4])
    setIsReseted(true)
    setShakeNextItem(false)
    setElementToShake(4)
    setIsClicked(false)
    setInverseCondition(false)
  }

  const imgCallback = (index, value) => { 
    const currentData = data;
    currentData[index] = value
    setData(currentData)
    var currentActive = []
    if (4+index === 20) {
      currentActive = [index, 3]
    } else if (4+index === 19) {
      currentActive = [index, 2]
    } else if (4+index === 18) {
      currentActive = [index, 1]
    } else if (4+index === 17) {
      currentActive = [index]
    } else {
      currentActive = [index, 4+index]
    }
    /* 
    Avec currentActive on peut trouver l' index du prochain carrée à activer si un autre boutton que lui est cliqué
    ce dernier va vibrer(shake). 
    */ 
    setActiveSquare(currentActive)
    setIsReseted(false)
    setElementToShake(currentActive.slice(-1))
    dataManipulation()
  }

  const dataManipulation = () => {
    const manerakaData = dataEightDown
    const manerakaData2 = dataEightDown2
    var tabAllHouse = searchTabSikidyWithTokana()
    
    for(var i=0; i<=79; i++){
      if(i>=0 && i<=3 && i>=8 && i<=13 && i>=18 && i<=23 && i>=28 && i<=33 && i>=38){
        manerakaData[i] = undefined
      }
    }
    manerakaData[7] = tabAllHouse[0][0]
    manerakaData[17] = tabAllHouse[0][1]
    manerakaData[27] = tabAllHouse[0][2]
    manerakaData[37] = tabAllHouse[0][3]

    manerakaData[6] = tabAllHouse[1][0]
    manerakaData[16] = tabAllHouse[1][1]
    manerakaData[26] = tabAllHouse[1][2]
    manerakaData[36] = tabAllHouse[1][3]

    manerakaData[5] = tabAllHouse[2][0]
    manerakaData[15] = tabAllHouse[2][1]
    manerakaData[25] = tabAllHouse[2][2]
    manerakaData[35] = tabAllHouse[2][3]

    manerakaData[4] = tabAllHouse[3][0]
    manerakaData[14] = tabAllHouse[3][1]
    manerakaData[24] = tabAllHouse[3][2]
    manerakaData[34] = tabAllHouse[3][3]

    manerakaData2[2] = tabAllHouse[8][0]
    manerakaData2[12] = tabAllHouse[8][1]
    manerakaData2[22] = tabAllHouse[8][2]
    manerakaData2[32] = tabAllHouse[8][3]

    manerakaData2[3] = tabAllHouse[9][0]
    manerakaData2[13] = tabAllHouse[9][1]
    manerakaData2[23] = tabAllHouse[9][2]
    manerakaData2[33] = tabAllHouse[9][3]

    manerakaData2[4] = tabAllHouse[10][0]
    manerakaData2[14] = tabAllHouse[10][1]
    manerakaData2[24] = tabAllHouse[10][2]
    manerakaData2[34] = tabAllHouse[10][3]

    manerakaData2[5] = tabAllHouse[11][0]
    manerakaData2[15] = tabAllHouse[11][1]
    manerakaData2[25] = tabAllHouse[11][2]
    manerakaData2[35] = tabAllHouse[11][3]

    manerakaData2[6] = tabAllHouse[12][0]
    manerakaData2[16] = tabAllHouse[12][1]
    manerakaData2[26] = tabAllHouse[12][2]
    manerakaData2[36] = tabAllHouse[12][3]

    manerakaData2[7] = tabAllHouse[13][0]
    manerakaData2[17] = tabAllHouse[13][1]
    manerakaData2[27] = tabAllHouse[13][2]
    manerakaData2[37] = tabAllHouse[13][3]

    manerakaData2[8] = tabAllHouse[14][0]
    manerakaData2[18] = tabAllHouse[14][1]
    manerakaData2[28] = tabAllHouse[14][2]
    manerakaData2[38] = tabAllHouse[14][3]

    manerakaData2[9] = tabAllHouse[15][0]
    manerakaData2[19] = tabAllHouse[15][1]
    manerakaData2[29] = tabAllHouse[15][2]
    manerakaData2[39] = tabAllHouse[15][3]

    setDataEightDown2(manerakaData2)
    setDataEightDown(manerakaData)
  }

  const generateMother = () => {
    const motherData = data
    for(var i = 0; i <= 16; i++){
      motherData[i] = (Math.floor(Math.random() * (400 - 2 + 1) + 2) % 2) + 1
    }
    
    setIsClicked(true)
    setData(motherData)
    setElementToShake(null)
    setActiveSquare([null])

    const manerakaData = dataEightDown
    const manerakaData2 = dataEightDown2
    var tabAllHouse = searchTabSikidyWithTokana()

      manerakaData[7] = tabAllHouse[0][0]
      manerakaData[17] = tabAllHouse[0][1]
      manerakaData[27] = tabAllHouse[0][2]
      manerakaData[37] = tabAllHouse[0][3]

      manerakaData[6] = tabAllHouse[1][0]
      manerakaData[16] = tabAllHouse[1][1]
      manerakaData[26] = tabAllHouse[1][2]
      manerakaData[36] = tabAllHouse[1][3]

      manerakaData[5] = tabAllHouse[2][0]
      manerakaData[15] = tabAllHouse[2][1]
      manerakaData[25] = tabAllHouse[2][2]
      manerakaData[35] = tabAllHouse[2][3]

      manerakaData[4] = tabAllHouse[3][0]
      manerakaData[14] = tabAllHouse[3][1]
      manerakaData[24] = tabAllHouse[3][2]
      manerakaData[34] = tabAllHouse[3][3]

      manerakaData2[2] = tabAllHouse[8][0]
      manerakaData2[12] = tabAllHouse[8][1]
      manerakaData2[22] = tabAllHouse[8][2]
      manerakaData2[32] = tabAllHouse[8][3]

      manerakaData2[3] = tabAllHouse[9][0]
      manerakaData2[13] = tabAllHouse[9][1]
      manerakaData2[23] = tabAllHouse[9][2]
      manerakaData2[33] = tabAllHouse[9][3]

      manerakaData2[4] = tabAllHouse[10][0]
      manerakaData2[14] = tabAllHouse[10][1]
      manerakaData2[24] = tabAllHouse[10][2]
      manerakaData2[34] = tabAllHouse[10][3]

      manerakaData2[5] = tabAllHouse[11][0]
      manerakaData2[15] = tabAllHouse[11][1]
      manerakaData2[25] = tabAllHouse[11][2]
      manerakaData2[35] = tabAllHouse[11][3]

      manerakaData2[6] = tabAllHouse[12][0]
      manerakaData2[16] = tabAllHouse[12][1]
      manerakaData2[26] = tabAllHouse[12][2]
      manerakaData2[36] = tabAllHouse[12][3]

      manerakaData2[7] = tabAllHouse[13][0]
      manerakaData2[17] = tabAllHouse[13][1]
      manerakaData2[27] = tabAllHouse[13][2]
      manerakaData2[37] = tabAllHouse[13][3]

      manerakaData2[8] = tabAllHouse[14][0]
      manerakaData2[18] = tabAllHouse[14][1]
      manerakaData2[28] = tabAllHouse[14][2]
      manerakaData2[38] = tabAllHouse[14][3]

      manerakaData2[9] = tabAllHouse[15][0]
      manerakaData2[19] = tabAllHouse[15][1]
      manerakaData2[29] = tabAllHouse[15][2]
      manerakaData2[39] = tabAllHouse[15][3]
    
      setDataEightDown2(manerakaData2)
      setDataEightDown(manerakaData) 
  }
  const [inverseCondition, setInverseCondition] = useState(false) 
  const inverse = () => {
    const motherData = data;
    var inverseMotherData = data;

    // tale dans data
    inverseMotherData[4] = motherData[4]
    inverseMotherData[8] = motherData[3]
    inverseMotherData[12] = motherData[2]
    inverseMotherData[16] = motherData[1]

    // maly dans data

    inverseMotherData[3] = motherData[8]
    inverseMotherData[7] = motherData[7]
    inverseMotherData[11] = motherData[6]
    inverseMotherData[15] = motherData[5]

    // fahatelo dans data

    inverseMotherData[2] = motherData[12]
    inverseMotherData[6] = motherData[11]
    inverseMotherData[10] = motherData[10]
    inverseMotherData[14] = motherData[9]

    // bilady dans data

    inverseMotherData[1] = motherData[16]
    inverseMotherData[5] = motherData[15]
    inverseMotherData[9] = motherData[14]
    inverseMotherData[13] = motherData[13]

    setInverseCondition(true);
    setData(inverseMotherData);

    const manerakaData = dataEightDown
    const manerakaData2 = dataEightDown2
    
    var tabAllHouse = searchTabSikidyWithTokana()

      manerakaData[7] = tabAllHouse[0][0]
      manerakaData[17] = tabAllHouse[0][1]
      manerakaData[27] = tabAllHouse[0][2]
      manerakaData[37] = tabAllHouse[0][3]

      manerakaData[6] = tabAllHouse[1][0]
      manerakaData[16] = tabAllHouse[1][1]
      manerakaData[26] = tabAllHouse[1][2]
      manerakaData[36] = tabAllHouse[1][3]

      manerakaData[5] = tabAllHouse[2][0]
      manerakaData[15] = tabAllHouse[2][1]
      manerakaData[25] = tabAllHouse[2][2]
      manerakaData[35] = tabAllHouse[2][3]

      manerakaData[4] = tabAllHouse[3][0]
      manerakaData[14] = tabAllHouse[3][1]
      manerakaData[24] = tabAllHouse[3][2]
      manerakaData[34] = tabAllHouse[3][3]

      manerakaData2[2] = tabAllHouse[8][0]
      manerakaData2[12] = tabAllHouse[8][1]
      manerakaData2[22] = tabAllHouse[8][2]
      manerakaData2[32] = tabAllHouse[8][3]

      manerakaData2[3] = tabAllHouse[9][0]
      manerakaData2[13] = tabAllHouse[9][1]
      manerakaData2[23] = tabAllHouse[9][2]
      manerakaData2[33] = tabAllHouse[9][3]

      manerakaData2[4] = tabAllHouse[10][0]
      manerakaData2[14] = tabAllHouse[10][1]
      manerakaData2[24] = tabAllHouse[10][2]
      manerakaData2[34] = tabAllHouse[10][3]

      manerakaData2[5] = tabAllHouse[11][0]
      manerakaData2[15] = tabAllHouse[11][1]
      manerakaData2[25] = tabAllHouse[11][2]
      manerakaData2[35] = tabAllHouse[11][3]

      manerakaData2[6] = tabAllHouse[12][0]
      manerakaData2[16] = tabAllHouse[12][1]
      manerakaData2[26] = tabAllHouse[12][2]
      manerakaData2[36] = tabAllHouse[12][3]

      manerakaData2[7] = tabAllHouse[13][0]
      manerakaData2[17] = tabAllHouse[13][1]
      manerakaData2[27] = tabAllHouse[13][2]
      manerakaData2[37] = tabAllHouse[13][3]

      manerakaData2[8] = tabAllHouse[14][0]
      manerakaData2[18] = tabAllHouse[14][1]
      manerakaData2[28] = tabAllHouse[14][2]
      manerakaData2[38] = tabAllHouse[14][3]

      manerakaData2[9] = tabAllHouse[15][0]
      manerakaData2[19] = tabAllHouse[15][1]
      manerakaData2[29] = tabAllHouse[15][2]
      manerakaData2[39] = tabAllHouse[15][3]
    
      setDataEightDown2(manerakaData2)
      setDataEightDown(manerakaData)
  }

  const tableRow = (index) => {
    return (
      <table>
        <tr>
          <td> <MotherSquare inverseCondition={inverseCondition} disabledAction={shakeItem} shake={(shakeNextItem && (((index-1)*4)+1) == elementToShake) ? true : false} isReseted={isReseted} isClicked={isClicked} squareValue={data[((index-1)*4)+1]} disabled={(activeSquare.includes(((index-1)*4)+1)) ? false : true} name={`bilady_`+(index)} onClickImg={imgCallback} rowIndex={((index-1)*4)+1}/> </td>
          <td> <MotherSquare inverseCondition={inverseCondition} disabledAction={shakeItem} shake={(shakeNextItem && (((index-1)*4)+2) == elementToShake) ? true : false} isReseted={isReseted} isClicked={isClicked} squareValue={data[((index-1)*4)+2]} disabled={(activeSquare.includes(((index-1)*4)+2)) ? false : true} name={`fahatelo_`+(index)} onClickImg={imgCallback} rowIndex={((index-1)*4)+2}/> </td>
          <td> <MotherSquare inverseCondition={inverseCondition} disabledAction={shakeItem} shake={(shakeNextItem && (((index-1)*4)+3) == elementToShake) ? true : false} isReseted={isReseted} isClicked={isClicked} squareValue={data[((index-1)*4)+3]} disabled={(activeSquare.includes(((index-1)*4)+3)) ? false : true} name={`maly_`+(index)} onClickImg={imgCallback} rowIndex={((index-1)*4)+3}/> </td>
          <td> <MotherSquare inverseCondition={inverseCondition} disabledAction={shakeItem} shake={(shakeNextItem && (((index-1)*4)+4) == elementToShake) ? true : false} isReseted={isReseted} isClicked={isClicked} squareValue={data[((index-1)*4)+4]} disabled={(activeSquare.includes(((index-1)*4)+4)) ? false : true} name={`tale_`+(index)} onClickImg={imgCallback} rowIndex={((index-1)*4)+4}/> </td>
        </tr>
      </table>
    );
  }
  const tableSikidyEightDown = (index) => {
    return(
      <table>
        <tr>
          <td> <SikidyGenerate circleValue={dataEightDown[((index-1)*10)+1]} rowIndex={((index-1)*10)+1}/> </td>
          <td> <SikidyGenerate circleValue={dataEightDown[((index-1)*10)+2]} rowIndex={((index-1)*10)+2}/> </td>
          <td> <SikidyGenerate circleValue={dataEightDown[((index-1)*10)+3]} rowIndex={((index-1)*10)+3}/> </td>
          <td> <SikidyGenerate circleValue={dataEightDown[((index-1)*10)+4]} rowIndex={((index-1)*10)+4}/> </td>
          <td> <SikidyGenerate circleValue={dataEightDown[((index-1)*10)+5]} rowIndex={((index-1)*10)+5}/> </td>
          <td> <SikidyGenerate circleValue={dataEightDown[((index-1)*10)+6]} rowIndex={((index-1)*10)+6}/> </td>
          <td> <SikidyGenerate circleValue={dataEightDown[((index-1)*10)+7]} rowIndex={((index-1)*10)+7}/> </td>
          <td> <SikidyGenerate circleValue={dataEightDown[((index-1)*10)+8]} rowIndex={((index-1)*10)+8}/> </td>
          <td> <SikidyGenerate circleValue={dataEightDown[((index-1)*10)+9]} rowIndex={((index-1)*10)+9}/> </td>
          <td> <SikidyGenerate circleValue={dataEightDown[((index-1)*10)+10]}rowIndex={((index-1)*10)+10}/> </td>
        </tr>
      </table>
    )
  }
  const tableSikidyEightDown2 = (index) => {
    return(
      <table>
        <tr>
          <td> <SikidyGenerate circleValue={dataEightDown2[((index-1)*10)+1]} rowIndex={((index-1)*10)+1}/> </td>
          <td> <SikidyGenerate circleValue={dataEightDown2[((index-1)*10)+2]} rowIndex={((index-1)*10)+2}/> </td>
          <td> <SikidyGenerate circleValue={dataEightDown2[((index-1)*10)+3]} rowIndex={((index-1)*10)+3}/> </td>
          <td> <SikidyGenerate circleValue={dataEightDown2[((index-1)*10)+4]} rowIndex={((index-1)*10)+4}/> </td>
          <td> <SikidyGenerate circleValue={dataEightDown2[((index-1)*10)+5]} rowIndex={((index-1)*10)+5}/> </td>
          <td> <SikidyGenerate circleValue={dataEightDown2[((index-1)*10)+6]} rowIndex={((index-1)*10)+6}/> </td>
          <td> <SikidyGenerate circleValue={dataEightDown2[((index-1)*10)+7]} rowIndex={((index-1)*10)+7}/> </td>
          <td> <SikidyGenerate circleValue={dataEightDown2[((index-1)*10)+8]} rowIndex={((index-1)*10)+8}/> </td>
          <td> <SikidyGenerate circleValue={dataEightDown2[((index-1)*10)+9]} rowIndex={((index-1)*10)+9}/> </td>
          <td> <SikidyGenerate circleValue={dataEightDown2[((index-1)*10)+10]}rowIndex={((index-1)*10)+10}/> </td>
        </tr>
      </table>
    )
  }
  
  const tabAllHouse = searchTabSikidyWithTokana();

  function manerakaTsyHitaMaso(tab){

    var tale = [0, 0, 0, 0];
    var maly = [0, 0, 0, 0];
    var fahatelo = [0, 0, 0, 0];
    var bilady = [0, 0, 0, 0];
    var fianaha = [0, 0, 0, 0];
    var abily = [0, 0, 0, 0];
    var alisay = [0, 0, 0, 0];
    var fahavalo = [0, 0, 0, 0];
    var fahasivy = [0, 0, 0, 0];
    var ombiasa = [0, 0, 0, 0];
    var haja = [0, 0, 0, 0]
    var haky = [0, 0, 0, 0]
    var sorota = [0, 0, 0, 0]
    var sely = [0, 0, 0, 0]
    var safary = [0, 0, 0, 0]
    var kiba = [0, 0, 0, 0]

    //construction Tale
   for(var i=0; i<=3; i++){
    tale[i] = tab[13][i]
   }

   //construction Maly
   for(var i=0; i<=3; i++){
    maly[i] = tab[12][i]
   }

   //construction fahatelo
   for(var i=0; i<=3; i++){
    fahatelo[i] = tab[11][i]
   } 

   //construction bilady
   for(var i=0; i<=3; i++){
    bilady[i] = tab[10][i]
   }

   //construction fianaha
   for(var i=0; i<=3; i++){
    fianaha[i] = tab[13-i][0]
   }

   //construction abily
   for(var i=0; i<=3; i++){
    abily[i] = tab[13-i][1]
   }

   //construction alisay
   for(var i=0; i<=3; i++){
    alisay[i] = tab[13-i][2]
   }

   //construction fahavalo
   for(var i=0; i<=3; i++){
    fahavalo[i] = tab[13-i][3]
   }

   //construction fahasivy
   for(var i=0; i<=3; i++){
    var container = [0,0,0,0]
    if(fahavalo[i] !== undefined && fahavalo[i] !== 0 && fahavalo[i] !== null && alisay[i] !== undefined && alisay[i] !== null && alisay[i] !== 0){
      container[i] = (fahavalo[i] % 2) + (alisay[i] % 2)
      if(container[i] === 0 || container[i] === 2){
        fahasivy[i] = 2 
      }if(container[i] === 1){
        fahasivy[i] = 1
      }
    }  
   }

   //construction haja
   for(var i=0; i<=3; i++){
    var container = [0,0,0,0]
    if(abily[i] !== undefined && abily[i] !== null && abily[i] !== 0 && fianaha[i] !== 0 && fianaha[i] !== undefined && fianaha[i] !== null){
      container[i] = (fianaha[i] % 2) + (abily[i] % 2)
      if(container[i] === 0 || container[i] === 2){
        haja[i] = 2 
      }if(container[i] === 1){
        haja[i] = 1
      }
    }  
   }

   //construction ombiasa
   for(var i=0; i<=3; i++){
    var container = [0,0,0,0]
    if(haja[i] !== undefined && haja[i] !== 0 && fahasivy[i] !== 0 && haja[i] !== null && fahasivy[i] !== undefined && fahasivy[i] !== null){
      container[i] = (haja[i] % 2) + (fahasivy[i] % 2)
      if(container[i] === 2 || container[i] === 0){
        ombiasa[i] = 2 
      }if(container[i] === 1){
        ombiasa[i] = 1
      }
    }  
   }

   //construction sorota
   for(var i=0; i<=3; i++){
    var container = [0,0,0,0]
    if(bilady[i] !== undefined && bilady[i] !== null && bilady[i] !== 0 && fahatelo[i] !== 0 && fahatelo[i] !== undefined && fahatelo[i] !== null){
      container[i] = (bilady[i] % 2) + (fahatelo[i] % 2)
      if(container[i] === 2 || container[i] === 0){
        sorota[i] = 2 
      }if(container[i] === 1){
        sorota[i] = 1
      }
    }  
   }

   //construction safary
   for(var i=0; i<=3; i++){
    var container = [0,0,0,0]
    if(tale[i] !== undefined && tale[i] !== null && tale[i] !== 0 && maly[i] !== 0 && maly[i] !== undefined && maly[i] !== null){
      container[i] = (tale[i] % 2) + (maly[i] % 2)
      if(container[i] === 2 || container[i] === 0){
        safary[i] = 2 
      }if(container[i] === 1){
        safary[i] = 1
      }
    }  
   }

   //construction sely
   for(var i=0; i<=3; i++){
    var container = [0,0,0,0]
      if(sorota[i] !== 0 && safary[i] !== 0){container[i] = (sorota[i] % 2) + (safary[i] % 2)
      if(container[i] === 2 || container[i] === 0){
        sely[i] = 2 
      }if(container[i] === 1){
        sely[i] = 1
      }}  
   }

   //construction haky
  for(var i=0; i<=3; i++){
    var container = [0,0,0,0]
      if(sely[i] !== 0 && ombiasa[i] !== 0){container[i] = (sely[i] % 2) + (ombiasa[i] % 2)
      if(container[i] === 2 || container[i] === 0){
        haky[i] = 2 
      }if(container[i] === 1){
        haky[i] = 1
      }}  
   }

   //construction kiba
   for(var i=0; i<=3; i++){
    var container = [0,0,0,0]
    if(tale[i] !== undefined && tale[i] !== null && tale[i] !== 0 && haky[i] !== 0){
      container[i] = (tale[i] % 2) + (haky[i] % 2)
      if(container[i] === 2 || container[i] === 0){
        kiba[i] = 2 
      }if(container[i] === 1){
        kiba[i] = 1
      }
    }  
   }
   const allHouse = [tale, maly, fahatelo, bilady,
                   fianaha, abily, alisay, fahavalo,
                   fahasivy, ombiasa, haja, haky, 
                   sorota, sely, safary, kiba
  ]
  return allHouse
  }

  const TokanaManerakaTsyHitaMaso = (tabWait) => {
    // les 16 figures
    var asombola = [2,2,2,2]
    var taraiky = [1,1,1,1]
    var adalo = [1,2,1,2]
    var alohotsy = [2,1,2,1]
    var adabarah = [2,2,1,1]
    var alahasaty = [1,1,2,2]
    var renilaza = [1,2,2,2]
    var alakaosy = [2,1,1,1]
    var alimizanda = [1,1,2,1]
    var alaimora = [2,1,2,2]
    var alakarabo = [1,2,1,1]
    var alokola = [1,2,2,1]
    var alatsimay = [2,1,1,2]
    var alibiavotra = [2,2,1,2]
    var alikisy = [2,2,2,1]
    var karija = [1,1,1,2] 
    // Tableau des rohitany convention "Sikidy RaVince"
    var east = [adabarah, alatsimay, alaimora]
    var west = [alikisy, alakaosy, alokola, alohotsy, alakarabo]
    var north = [alibiavotra, renilaza, adalo, karija]
    var south = [asombola, taraiky, alimizanda, alahasaty]

    function isEqual(tableau1, tableau2) {
      if (tableau1.length !== tableau2.length) return false
    
      return tableau1.every((value, index) => value === tableau2[index])
    }

    function searchRohitany(tab){
      for(var i=0; i<east.length; i++){
        if(isEqual(tab, east[i])){
          return 'atsinanana'
        }
      }
      for(var i=0; i<west.length; i++){
        if(isEqual(tab, west[i])){
          return 'andrefana'
        }
      }
      for(var i=0; i<north.length; i++){
        if(isEqual(tab, north[i])){
          return 'avatra'
        }
      }
      for(var i=0; i<south.length; i++){
        if(isEqual(tab, south[i])){
          return 'atsimo'
        }
      }
    }
    function tabRohitany(tab){
      var rohiContain = new Array(tab.length)
      for(var i=0; i<tab.length; i++){
        rohiContain[i] = searchRohitany(tab[i])
      }
      return rohiContain
    }

    function rohiCount(myArray){
      var elementsCounts = {};
      myArray.forEach(element => {
        elementsCounts[element] = (elementsCounts[element] || 0) + 1;
      });
      return elementsCounts
    }

    function tokana(){
      var sikidy = manerakaTsyHitaMaso(tabWait);
      var index = 0;
      if(rohiCount(tabRohitany(sikidy)).atsinanana === 1){
        index = tabRohitany(sikidy).indexOf('atsinanana')
        for(var i=0; i<=3; i++){
          sikidy[index][i] = sikidy[index][i] + 8
        }
      }
      if(rohiCount(tabRohitany(sikidy)).andrefana === 1){
        index = tabRohitany(sikidy).indexOf('andrefana')
        for(var i=0; i<=3; i++){
          sikidy[index][i] = sikidy[index][i] + 8
        }
      }
      if(rohiCount(tabRohitany(sikidy)).avatra === 1){
        index = tabRohitany(sikidy).indexOf('avatra')
        for(var i=0; i<=3; i++){
          sikidy[index][i] = sikidy[index][i] + 8
        }
      }
      if(rohiCount(tabRohitany(sikidy)).atsimo === 1){
        index = tabRohitany(sikidy).indexOf('atsimo')
        for(var i=0; i<=3; i++){
          sikidy[index][i] = sikidy[index][i] + 8
        }
      }
      return sikidy
    }
    return tokana()
  }
  
  const tsyHitaMaso = TokanaManerakaTsyHitaMaso(tabAllHouse);
  const tsyHitaMasoLoop0 = tsyHitaMaso;
  const tsyHitaMasoLoop = TokanaManerakaTsyHitaMaso(tsyHitaMasoLoop0);
  const [isClickedforOverSees, setIsClickedForOverSees] = useState(false);

  console.log(JSON.stringify(tsyHitaMasoLoop0));
  console.log(JSON.stringify(tsyHitaMasoLoop));

  function onClick(){
    setIsClickedForOverSees(true);
  }

  return(
      
      <BrowserRouter>
        <Routes>
          <Route path='/motherPage' element={
            <div className='motherPage'>
              <div className='positionAjust'>

                <div className='mother'>
                  <Header/>
                  <Header2 callBack={() => {
                    if (isReseted) {
                      generateMother()
                      setIsReseted(false)
                    }        
                    }}
                  />
                  {[...Array(4)].map((x, i) => tableRow(i+1))}
                </div>
    
                <div className='appFooter'>
                  <Refresh callBack={resetSquare} />
                  <Link to='/sikidyEightDownPage'>
                    <Calculate/>
                  </Link>
                  <Inverse callBack={inverse}/>
                </div>

              </div>
          </div>
          }/>
           
          <Route path='sikidyEightDownPage' element={
            <div className='sikidyEightDownStyle'>
                {[...Array(4)].map((x, i) => tableSikidyEightDown(i+1))}
                <div className='space'></div>
                {[...Array(4)].map((x, i) => tableSikidyEightDown2(i+1))}
                <HomeImgButton/>
            </div> 
          }/>
          <Route path='TsyHitaMasoPage' element={
            <div className='motherPage'>
              <div className='mother'>
                <TsyHitaMasoComponent/>
                <div className='paddingTop'><Underline/></div>
                <div className='displayStyle'>
                  <div className='display2'>
                    <FourComponentC 
                      fahasivy1={tabAllHouse[8][0]}                        
                      fahasivy2={tabAllHouse[8][1]} 
                      fahasivy3={tabAllHouse[8][2]} 
                      fahasivy4={tabAllHouse[8][3]}

                      isClickedforOverSees={isClickedforOverSees}
                      
                      fahasivyEffect1={tsyHitaMasoLoop0[8][0]}
                      fahasivyEffect2={tsyHitaMasoLoop0[8][1]}
                      fahasivyEffect3={tsyHitaMasoLoop0[8][2]}
                      fahasivyEffect4={tsyHitaMasoLoop0[8][3]}

                    />
                    <FourComponentC2 
                      ombiasa1={tabAllHouse[9][0]}
                      ombiasa2={tabAllHouse[9][1]}
                      ombiasa3={tabAllHouse[9][2]}
                      ombiasa4={tabAllHouse[9][3]}

                      isClickedforOverSees={isClickedforOverSees}

                      ombiasaEffect1={tsyHitaMasoLoop0[9][0]}
                      ombiasaEffect2={tsyHitaMasoLoop0[9][1]}
                      ombiasaEffect3={tsyHitaMasoLoop0[9][2]}
                      ombiasaEffect4={tsyHitaMasoLoop0[9][3]}
                    />
                  </div>
                  <div>
                    <FourComponent
                      haja1={tabAllHouse[10][0]}
                      haky1={tabAllHouse[11][0]}
                      sorota1={tabAllHouse[12][0]}
                      sely1={tabAllHouse[13][0]}

                      isClickedforOverSees={isClickedforOverSees}

                      hajaEffect1={tsyHitaMasoLoop0[10][0]}
                      hakyEffect1={tsyHitaMasoLoop0[11][0]}
                      sorotaEffect1={tsyHitaMasoLoop0[12][0]}
                      selyEffect1={tsyHitaMasoLoop0[13][0]}
                    />
                    <FourComponent2
                      haja2={tabAllHouse[10][1]}
                      haky2={tabAllHouse[11][1]}
                      sorota2={tabAllHouse[12][1]}
                      sely2={tabAllHouse[13][1]}

                      isClickedforOverSees={isClickedforOverSees}

                      hajaEffect2={tsyHitaMasoLoop0[10][1]}
                      hakyEffect2={tsyHitaMasoLoop0[11][1]}
                      sorotaEffect2={tsyHitaMasoLoop0[12][1]}
                      selyEffect2={tsyHitaMasoLoop0[13][1]}
                    />
                    <FourComponent3
                      haja3={tabAllHouse[10][2]}
                      haky3={tabAllHouse[11][2]}
                      sorota3={tabAllHouse[12][2]}
                      sely3={tabAllHouse[13][2]}

                      isClickedforOverSees={isClickedforOverSees}

                      hajaEffect3={tsyHitaMasoLoop0[10][2]}
                      hakyEffect3={tsyHitaMasoLoop0[11][2]}
                      sorotaEffect3={tsyHitaMasoLoop0[12][2]}
                      selyEffect3={tsyHitaMasoLoop0[13][2]}
                    />
                    <FourComponent4
                      haja4={tabAllHouse[10][3]}
                      haky4={tabAllHouse[11][3]}
                      sorota4={tabAllHouse[12][3]}
                      sely4={tabAllHouse[13][3]}

                      isClickedforOverSees={isClickedforOverSees}

                      hajaEffect4={tsyHitaMasoLoop0[10][3]}
                      hakyEffect4={tsyHitaMasoLoop0[11][3]}
                      sorotaEffect4={tsyHitaMasoLoop0[12][3]}
                      selyEffect4={tsyHitaMasoLoop0[13][3]}
                    />
                  </div>
                  <div className='display3'>
                    <FourComponentC3
                      safary1={tabAllHouse[14][0]}
                      safary2={tabAllHouse[14][1]}
                      safary3={tabAllHouse[14][2]}
                      safary4={tabAllHouse[14][3]}

                      isClickedforOverSees={isClickedforOverSees}

                      safaryEffect1={tsyHitaMasoLoop0[14][0]}
                      safaryEffect2={tsyHitaMasoLoop0[14][1]}
                      safaryEffect3={tsyHitaMasoLoop0[14][2]}
                      safaryEffect4={tsyHitaMasoLoop0[14][3]}
                    />
                    <FourComponentC4
                      kiba1={tabAllHouse[15][0]}
                      kiba2={tabAllHouse[15][1]}
                      kiba3={tabAllHouse[15][2]}
                      kiba4={tabAllHouse[15][3]}

                      isClickedforOverSees={isClickedforOverSees}

                      kibaEffect1={tsyHitaMasoLoop0[15][0]}
                      kibaEffect2={tsyHitaMasoLoop0[15][1]}
                      kibaEffect3={tsyHitaMasoLoop0[15][2]}
                      kibaEffect4={tsyHitaMasoLoop0[15][3]}
                    />
                  </div>
                </div>
                <div className='paddingTop'><Underline/></div>
                <div className='displayStyle'>
                  <div className='display2'>
                    <FourComponentC5
                      fahasivy1={tsyHitaMaso[8][0]}
                      fahasivy2={tsyHitaMaso[8][1]}
                      fahasivy3={tsyHitaMaso[8][2]}
                      fahasivy4={tsyHitaMaso[8][3]}
                      
                      isClickedforOverSees={isClickedforOverSees}
                      
                      fahasivyEffect1={tsyHitaMasoLoop[8][0]}
                      fahasivyEffect2={tsyHitaMasoLoop[8][1]}
                      fahasivyEffect3={tsyHitaMasoLoop[8][2]}
                      fahasivyEffect4={tsyHitaMasoLoop[8][3]}
                    />
                    <FourComponentC6
                      ombiasa1={tsyHitaMaso[9][0]}
                      ombiasa2={tsyHitaMaso[9][1]}
                      ombiasa3={tsyHitaMaso[9][2]}
                      ombiasa4={tsyHitaMaso[9][3]}
                      
                      isClickedforOverSees={isClickedforOverSees}

                      ombiasaEffect1={tsyHitaMasoLoop[9][0]}
                      ombiasaEffect2={tsyHitaMasoLoop[9][1]}
                      ombiasaEffect3={tsyHitaMasoLoop[9][2]}
                      ombiasaEffect4={tsyHitaMasoLoop[9][3]}
                    />
                  </div>
                  <div>
                    <FourComponent5
                      haja1={tsyHitaMaso[10][0]}
                      haky1={tsyHitaMaso[11][0]}
                      sorota1={tsyHitaMaso[12][0]}
                      sely1={tsyHitaMaso[13][0]}
                      
                      isClickedforOverSees={isClickedforOverSees}

                      hajaEffect1={tsyHitaMasoLoop[10][3]}
                      hakyEffect1={tsyHitaMasoLoop[11][3]}
                      sorotaEffect1={tsyHitaMasoLoop[12][3]}
                      selyEffect1={tsyHitaMasoLoop[13][3]}
                    />
                    <FourComponent6
                      haja2={tsyHitaMaso[10][1]}
                      haky2={tsyHitaMaso[11][1]}
                      sorota2={tsyHitaMaso[12][1]}
                      sely2={tsyHitaMaso[13][1]}
                      
                      isClickedforOverSees={isClickedforOverSees}

                      hajaEffect2={tsyHitaMasoLoop[10][3]}
                      hakyEffect2={tsyHitaMasoLoop[11][3]}
                      sorotaEffect2={tsyHitaMasoLoop[12][3]}
                      selyEffect2={tsyHitaMasoLoop[13][3]}
                    />
                    <FourComponent7
                      haja3={tsyHitaMaso[10][2]}
                      haky3={tsyHitaMaso[11][2]}
                      sorota3={tsyHitaMaso[12][2]}
                      sely3={tsyHitaMaso[13][2]}
                      
                      isClickedforOverSees={isClickedforOverSees}

                      hajaEffect3={tsyHitaMasoLoop[10][3]}
                      hakyEffect3={tsyHitaMasoLoop[11][3]}
                      sorotaEffect3={tsyHitaMasoLoop[12][3]}
                      selyEffect3={tsyHitaMasoLoop[13][3]}
                    />
                    <FourComponent8
                      haja4={tsyHitaMaso[10][3]}
                      haky4={tsyHitaMaso[11][3]}
                      sorota4={tsyHitaMaso[12][3]}
                      sely4={tsyHitaMaso[13][3]}
                      
                      isClickedforOverSees={isClickedforOverSees}

                      hajaEffect4={tsyHitaMasoLoop[10][3]}
                      hakyEffect4={tsyHitaMasoLoop[11][3]}
                      sorotaEffect4={tsyHitaMasoLoop[12][3]}
                      selyEffect4={tsyHitaMasoLoop[13][3]}
                    />
                  </div>
                  <div className='display3'>
                    <FourComponentC7
                      safary1={tsyHitaMaso[14][0]}
                      safary2={tsyHitaMaso[14][1]}
                      safary3={tsyHitaMaso[14][2]}
                      safary4={tsyHitaMaso[14][3]}
                      
                      isClickedforOverSees={isClickedforOverSees}

                      safaryEffect1={tsyHitaMasoLoop[14][0]}
                      safaryEffect2={tsyHitaMasoLoop[14][1]}
                      safaryEffect3={tsyHitaMasoLoop[14][2]}
                      safaryEffect4={tsyHitaMasoLoop[14][3]}
                    />
                    <FourComponentC8
                      kiba1={tsyHitaMaso[15][0]}
                      kiba2={tsyHitaMaso[15][1]}
                      kiba3={tsyHitaMaso[15][2]}
                      kiba4={tsyHitaMaso[15][3]}
                      
                      isClickedforOverSees={isClickedforOverSees}

                      kibaEffect1={tsyHitaMasoLoop[15][0]}
                      kibaEffect2={tsyHitaMasoLoop[15][1]}
                      kibaEffect3={tsyHitaMasoLoop[15][2]}
                      kibaEffect4={tsyHitaMasoLoop[15][3]}
                    />
                  </div>
                </div>
                <InfiniteBoutton callBack={onClick}/>
              </div>
            </div>
          }/> 
        </Routes>        
      </BrowserRouter>
  );
}

export default App;
