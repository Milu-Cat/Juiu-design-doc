import React, { FC } from 'react';
import { Icon } from 'juiu-design';
// import { ButtonType, ButtonSize } from 'juiu-design/dist/components/Button/button';
import './index.scss';

const IconView: FC = (props) => {
  const code =
  `  import { Button } from 'juiu-design';
  import { ButtonType, ButtonSize } from 'juiu-design/dist/components/Button/button';

  <Button btnType={ButtonType.Primary} size={ButtonSize.Large} onClick={e => { e.preventDefault();alert('Alert')}}
  >Large Primary</Button>
  <Button btnType={ButtonType.Success}>Default Success</Button>
  <Button btnType={ButtonType.Warning}>Default Warning</Button>
  <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>Small Danger</Button>
  <Button onClick={e => { e.preventDefault(); alert('Alert')}}>Default</Button>
  <Button disabled>Disabled</Button>
  <Button btnType={ButtonType.Link} href="http://www.baidu.com" target="_blank">Link</Button>
  <Button btnType={ButtonType.Link} disabled >Disabled Link</Button>`
  return (
    <div className="icon-view">
      
    <ul className="icon_lists dib-box">
          
          <li className="dib">
            <Icon type="icon iconright-btn-fill"></Icon>
            <div className="name">
              right-btn-fill
            </div>
            <div className="code-name">.iconright-btn-fill
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon228QQ"></Icon>
            <div className="name">
              228QQ
            </div>
            <div className="code-name">.icon228QQ
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon iconbottom-btn-fill"></Icon>
            <div className="name">
              bottom-btn-fill
            </div>
            <div className="code-name">.iconbottom-btn-fill
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon287user06"></Icon>
            <div className="name">
              287user06
            </div>
            <div className="code-name">.icon287user06
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon001addWD"></Icon>
            <div className="name">
              001addWD
            </div>
            <div className="code-name">.icon001addWD
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon226code"></Icon>
            <div className="name">
              226code
            </div>
            <div className="code-name">.icon226code
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon008minus04"></Icon>
            <div className="name">
              008minus04
            </div>
            <div className="code-name">.icon008minus04
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon293menudisplay"></Icon>
            <div className="name">
              293menudisplay
            </div>
            <div className="code-name">.icon293menudisplay
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon017check03"></Icon>
            <div className="name">
              017check03
            </div>
            <div className="code-name">.icon017check03
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon266pen01"></Icon>
            <div className="name">
              266pen01
            </div>
            <div className="code-name">.icon266pen01
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon013cross02"></Icon>
            <div className="name">
              013cross02
            </div>
            <div className="code-name">.icon013cross02
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon240zhome03"></Icon>
            <div className="name">
              240zhome03
            </div>
            <div className="code-name">.icon240zhome03
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon012cross05"></Icon>
            <div className="name">
              012cross05
            </div>
            <div className="code-name">.icon012cross05
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon244arrowXZ06"></Icon>
            <div className="name">
              244arrowXZ06
            </div>
            <div className="code-name">.icon244arrowXZ06
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon010plus05"></Icon>
            <div className="name">
              010plus05
            </div>
            <div className="code-name">.icon010plus05
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon260notice01"></Icon>
            <div className="name">
              260notice01
            </div>
            <div className="code-name">.icon260notice01
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon021checkboxWXZ"></Icon>
            <div className="name">
              021checkboxWXZ
            </div>
            <div className="code-name">.icon021checkboxWXZ
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon291flashlight"></Icon>
            <div className="name">
              291flashlight
            </div>
            <div className="code-name">.icon291flashlight
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon018cross04"></Icon>
            <div className="name">
              018cross04
            </div>
            <div className="code-name">.icon018cross04
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon282zhome04"></Icon>
            <div className="name">
              282zhome04
            </div>
            <div className="code-name">.icon282zhome04
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon019cross06"></Icon>
            <div className="name">
              019cross06
            </div>
            <div className="code-name">.icon019cross06
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon258choose01"></Icon>
            <div className="name">
              258choose01
            </div>
            <div className="code-name">.icon258choose01
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon002deleteWD"></Icon>
            <div className="name">
              002deleteWD
            </div>
            <div className="code-name">.icon002deleteWD
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon297textleft"></Icon>
            <div className="name">
              297textleft
            </div>
            <div className="code-name">.icon297textleft
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon005plus03"></Icon>
            <div className="name">
              005plus03
            </div>
            <div className="code-name">.icon005plus03
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon295rotate"></Icon>
            <div className="name">
              295rotate
            </div>
            <div className="code-name">.icon295rotate
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon009minus01"></Icon>
            <div className="name">
              009minus01
            </div>
            <div className="code-name">.icon009minus01
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon299textright"></Icon>
            <div className="name">
              299textright
            </div>
            <div className="code-name">.icon299textright
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon011minus05"></Icon>
            <div className="name">
              011minus05
            </div>
            <div className="code-name">.icon011minus05
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon301deletingline"></Icon>
            <div className="name">
              301deletingline
            </div>
            <div className="code-name">.icon301deletingline
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon029cancel"></Icon>
            <div className="name">
              029cancel
            </div>
            <div className="code-name">.icon029cancel
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon248arrowXZ07"></Icon>
            <div className="name">
              248arrowXZ07
            </div>
            <div className="code-name">.icon248arrowXZ07
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon007plus04"></Icon>
            <div className="name">
              007plus04
            </div>
            <div className="code-name">.icon007plus04
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon252bell01"></Icon>
            <div className="name">
              252bell01
            </div>
            <div className="code-name">.icon252bell01
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon020checkboxXZ"></Icon>
            <div className="name">
              020checkboxXZ
            </div>
            <div className="code-name">.icon020checkboxXZ
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon305circular"></Icon>
            <div className="name">
              305circular
            </div>
            <div className="code-name">.icon305circular
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon023radioWXZ"></Icon>
            <div className="name">
              023radioWXZ
            </div>
            <div className="code-name">.icon023radioWXZ
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon264follow03"></Icon>
            <div className="name">
              264follow03
            </div>
            <div className="code-name">.icon264follow03
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon031send"></Icon>
            <div className="name">
              031send
            </div>
            <div className="code-name">.icon031send
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon307rectangle"></Icon>
            <div className="name">
              307rectangle
            </div>
            <div className="code-name">.icon307rectangle
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon006minus03"></Icon>
            <div className="name">
              006minus03
            </div>
            <div className="code-name">.icon006minus03
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon084arrowXX04"></Icon>
            <div className="name">
              084arrowXX04
            </div>
            <div className="code-name">.icon084arrowXX04
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon025ban"></Icon>
            <div className="name">
              025ban
            </div>
            <div className="code-name">.icon025ban
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon234logoZH02"></Icon>
            <div className="name">
              234logoZH02
            </div>
            <div className="code-name">.icon234logoZH02
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon030back"></Icon>
            <div className="name">
              030back
            </div>
            <div className="code-name">.icon030back
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon309triangle"></Icon>
            <div className="name">
              309triangle
            </div>
            <div className="code-name">.icon309triangle
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon003plus01"></Icon>
            <div className="name">
              003plus01
            </div>
            <div className="code-name">.icon003plus01
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon294scissors"></Icon>
            <div className="name">
              294scissors
            </div>
            <div className="code-name">.icon294scissors
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon014cross03"></Icon>
            <div className="name">
              014cross03
            </div>
            <div className="code-name">.icon014cross03
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon286user05"></Icon>
            <div className="name">
              286user05
            </div>
            <div className="code-name">.icon286user05
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon027stop"></Icon>
            <div className="name">
              027stop
            </div>
            <div className="code-name">.icon027stop
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon268calendar02"></Icon>
            <div className="name">
              268calendar02
            </div>
            <div className="code-name">.icon268calendar02
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon022radioXZ"></Icon>
            <div className="name">
              022radioXZ
            </div>
            <div className="code-name">.icon022radioXZ
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon311diamond"></Icon>
            <div className="name">
              311diamond
            </div>
            <div className="code-name">.icon311diamond
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon015cross01"></Icon>
            <div className="name">
              015cross01
            </div>
            <div className="code-name">.icon015cross01
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon303italic"></Icon>
            <div className="name">
              303italic
            </div>
            <div className="code-name">.icon303italic
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon033edit"></Icon>
            <div className="name">
              033edit
            </div>
            <div className="code-name">.icon033edit
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon313alignbottom"></Icon>
            <div className="name">
              313align bottom
            </div>
            <div className="code-name">.icon313alignbottom
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon037trash"></Icon>
            <div className="name">
              037trash
            </div>
            <div className="code-name">.icon037trash
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon238chartRLT"></Icon>
            <div className="name">
              238chartRLT
            </div>
            <div className="code-name">.icon238chartRLT
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon026pause"></Icon>
            <div className="name">
              026pause
            </div>
            <div className="code-name">.icon026pause
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon272location06"></Icon>
            <div className="name">
              272location06
            </div>
            <div className="code-name">.icon272location06
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon032newWD"></Icon>
            <div className="name">
              032newWD
            </div>
            <div className="code-name">.icon032newWD
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon315alignverticalcenter"></Icon>
            <div className="name">
              315align vertical center
            </div>
            <div className="code-name">.icon315alignverticalcenter
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon035storage"></Icon>
            <div className="name">
              035storage
            </div>
            <div className="code-name">.icon035storage
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon317alignright"></Icon>
            <div className="name">
              317align right
            </div>
            <div className="code-name">.icon317alignright
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon047min"></Icon>
            <div className="name">
              047min
            </div>
            <div className="code-name">.icon047min
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon290calendar04"></Icon>
            <div className="name">
              290calendar04
            </div>
            <div className="code-name">.icon290calendar04
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon034pen"></Icon>
            <div className="name">
              034pen
            </div>
            <div className="code-name">.icon034pen
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon310emptytriangle"></Icon>
            <div className="name">
              310emptytriangle
            </div>
            <div className="code-name">.icon310emptytriangle
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon039folder"></Icon>
            <div className="name">
              039folder
            </div>
            <div className="code-name">.icon039folder
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon196calendar"></Icon>
            <div className="name">
              196calendar
            </div>
            <div className="code-name">.icon196calendar
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon024check01"></Icon>
            <div className="name">
              024check01
            </div>
            <div className="code-name">.icon024check01
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon318alignTop"></Icon>
            <div className="name">
              318align Top
            </div>
            <div className="code-name">.icon318alignTop
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon041preview"></Icon>
            <div className="name">
              041preview
            </div>
            <div className="code-name">.icon041preview
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon096prev"></Icon>
            <div className="name">
              096prev
            </div>
            <div className="code-name">.icon096prev
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon042previewPL"></Icon>
            <div className="name">
              042previewPL
            </div>
            <div className="code-name">.icon042previewPL
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon088forward"></Icon>
            <div className="name">
              088forward
            </div>
            <div className="code-name">.icon088forward
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon043search"></Icon>
            <div className="name">
              043search
            </div>
            <div className="code-name">.icon043search
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon321Reordering"></Icon>
            <div className="name">
              321Reordering
            </div>
            <div className="code-name">.icon321Reordering
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon038empty"></Icon>
            <div className="name">
              038empty
            </div>
            <div className="code-name">.icon038empty
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon288document"></Icon>
            <div className="name">
              288document
            </div>
            <div className="code-name">.icon288document
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon046max"></Icon>
            <div className="name">
              046max
            </div>
            <div className="code-name">.icon046max
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon325suspend"></Icon>
            <div className="name">
              325suspend
            </div>
            <div className="code-name">.icon325suspend
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon051pop"></Icon>
            <div className="name">
              051pop
            </div>
            <div className="code-name">.icon051pop
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon319Verticalcentraldistribution"></Icon>
            <div className="name">
              319Vertical central distribution
            </div>
            <div className="code-name">.icon319Verticalcentraldistribution
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon053contract"></Icon>
            <div className="name">
              053contract
            </div>
            <div className="code-name">.icon053contract
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon302underline"></Icon>
            <div className="name">
              302underline
            </div>
            <div className="code-name">.icon302underline
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon057reload"></Icon>
            <div className="name">
              057reload
            </div>
            <div className="code-name">.icon057reload
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon298textcenter"></Icon>
            <div className="name">
              298textcenter
            </div>
            <div className="code-name">.icon298textcenter
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon061choose"></Icon>
            <div className="name">
              061choose
            </div>
            <div className="code-name">.icon061choose
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon323Menulist"></Icon>
            <div className="name">
              323Menu list
            </div>
            <div className="code-name">.icon323Menulist
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon056refresh"></Icon>
            <div className="name">
              056refresh
            </div>
            <div className="code-name">.icon056refresh
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon322annotation"></Icon>
            <div className="name">
              322annotation
            </div>
            <div className="code-name">.icon322annotation
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon055question"></Icon>
            <div className="name">
              055question
            </div>
            <div className="code-name">.icon055question
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon276no_content"></Icon>
            <div className="name">
              276no_content
            </div>
            <div className="code-name">.icon276no_content
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon004plus02"></Icon>
            <div className="name">
              004plus02
            </div>
            <div className="code-name">.icon004plus02
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon280chinamap"></Icon>
            <div className="name">
              280chinamap
            </div>
            <div className="code-name">.icon280chinamap
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon049import"></Icon>
            <div className="name">
              049import
            </div>
            <div className="code-name">.icon049import
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon200book02"></Icon>
            <div className="name">
              200book02
            </div>
            <div className="code-name">.icon200book02
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon045narrow"></Icon>
            <div className="name">
              045narrow
            </div>
            <div className="code-name">.icon045narrow
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon328storage2"></Icon>
            <div className="name">
              328storage2
            </div>
            <div className="code-name">.icon328storage2
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon058update"></Icon>
            <div className="name">
              058update
            </div>
            <div className="code-name">.icon058update
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon327paixu"></Icon>
            <div className="name">
              327paixu
            </div>
            <div className="code-name">.icon327paixu
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon050export"></Icon>
            <div className="name">
              050export
            </div>
            <div className="code-name">.icon050export
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon308emptyrectangle"></Icon>
            <div className="name">
              308emptyrectangle
            </div>
            <div className="code-name">.icon308emptyrectangle
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon067download01"></Icon>
            <div className="name">
              067download01
            </div>
            <div className="code-name">.icon067download01
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon326Release"></Icon>
            <div className="name">
              326Release
            </div>
            <div className="code-name">.icon326Release
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon059load"></Icon>
            <div className="name">
              059load
            </div>
            <div className="code-name">.icon059load
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon329"></Icon>
            <div className="name">
              329
            </div>
            <div className="code-name">.icon329
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon016check02"></Icon>
            <div className="name">
              016check02
            </div>
            <div className="code-name">.icon016check02
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon278setting02"></Icon>
            <div className="name">
              278setting02
            </div>
            <div className="code-name">.icon278setting02
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon054notification"></Icon>
            <div className="name">
              054notification
            </div>
            <div className="code-name">.icon054notification
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon204phone"></Icon>
            <div className="name">
              204phone
            </div>
            <div className="code-name">.icon204phone
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon085arrowXZ04"></Icon>
            <div className="name">
              085arrowXZ04
            </div>
            <div className="code-name">.icon085arrowXZ04
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon331search"></Icon>
            <div className="name">
              331search
            </div>
            <div className="code-name">.icon331search
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon070arrowXX01"></Icon>
            <div className="name">
              070arrowXX01
            </div>
            <div className="code-name">.icon070arrowXX01
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon208money01"></Icon>
            <div className="name">
              208money01
            </div>
            <div className="code-name">.icon208money01
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon028arrow"></Icon>
            <div className="name">
              028arrow
            </div>
            <div className="code-name">.icon028arrow
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon332money02"></Icon>
            <div className="name">
              332money02
            </div>
            <div className="code-name">.icon332money02
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon062display"></Icon>
            <div className="name">
              062display
            </div>
            <div className="code-name">.icon062display
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon284menu06"></Icon>
            <div className="name">
              284menu06
            </div>
            <div className="code-name">.icon284menu06
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon069arrowXS01"></Icon>
            <div className="name">
              069arrowXS01
            </div>
            <div className="code-name">.icon069arrowXS01
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon333money03"></Icon>
            <div className="name">
              333money03
            </div>
            <div className="code-name">.icon333money03
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon075arrowXZ02"></Icon>
            <div className="name">
              075arrowXZ02
            </div>
            <div className="code-name">.icon075arrowXZ02
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon331"></Icon>
            <div className="name">
              331
            </div>
            <div className="code-name">.icon331
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon063hide"></Icon>
            <div className="name">
              063hide
            </div>
            <div className="code-name">.icon063hide
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon335max02"></Icon>
            <div className="name">
              335max02
            </div>
            <div className="code-name">.icon335max02
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon065download02"></Icon>
            <div className="name">
              065download02
            </div>
            <div className="code-name">.icon065download02
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon336"></Icon>
            <div className="name">
              336
            </div>
            <div className="code-name">.icon336
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon040open"></Icon>
            <div className="name">
              040open
            </div>
            <div className="code-name">.icon040open
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon312emptydiamond"></Icon>
            <div className="name">
              312emptydiamond
            </div>
            <div className="code-name">.icon312emptydiamond
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon066synchronize"></Icon>
            <div className="name">
              066synchronize
            </div>
            <div className="code-name">.icon066synchronize
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon324play"></Icon>
            <div className="name">
              324play
            </div>
            <div className="code-name">.icon324play
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon074arrowXX02"></Icon>
            <div className="name">
              074arrowXX02
            </div>
            <div className="code-name">.icon074arrowXX02
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon337"></Icon>
            <div className="name">
              337
            </div>
            <div className="code-name">.icon337
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon087rewind"></Icon>
            <div className="name">
              087rewind
            </div>
            <div className="code-name">.icon087rewind
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon212trophy01"></Icon>
            <div className="name">
              212trophy01
            </div>
            <div className="code-name">.icon212trophy01
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon036storageXZ"></Icon>
            <div className="name">
              036storageXZ
            </div>
            <div className="code-name">.icon036storageXZ
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon339"></Icon>
            <div className="name">
              339
            </div>
            <div className="code-name">.icon339
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon052expand"></Icon>
            <div className="name">
              052expand
            </div>
            <div className="code-name">.icon052expand
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon343"></Icon>
            <div className="name">
              343
            </div>
            <div className="code-name">.icon343
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon060setting"></Icon>
            <div className="name">
              060setting
            </div>
            <div className="code-name">.icon060setting
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon292-bluetooth"></Icon>
            <div className="name">
              292-bluetooth
            </div>
            <div className="code-name">.icon292-bluetooth
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon093under01"></Icon>
            <div className="name">
              093under01
            </div>
            <div className="code-name">.icon093under01
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon347"></Icon>
            <div className="name">
              347
            </div>
            <div className="code-name">.icon347
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon081arrowXZ05"></Icon>
            <div className="name">
              081arrowXZ05
            </div>
            <div className="code-name">.icon081arrowXZ05
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon345"></Icon>
            <div className="name">
              345
            </div>
            <div className="code-name">.icon345
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon073arrowXS02"></Icon>
            <div className="name">
              073arrowXS02
            </div>
            <div className="code-name">.icon073arrowXS02
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon341"></Icon>
            <div className="name">
              341
            </div>
            <div className="code-name">.icon341
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon077arrowXS03"></Icon>
            <div className="name">
              077arrowXS03
            </div>
            <div className="code-name">.icon077arrowXS03
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon328"></Icon>
            <div className="name">
              328
            </div>
            <div className="code-name">.icon328
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon079arrowXZ03"></Icon>
            <div className="name">
              079arrowXZ03
            </div>
            <div className="code-name">.icon079arrowXZ03
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon296cut"></Icon>
            <div className="name">
              296cut
            </div>
            <div className="code-name">.icon296cut
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon071arrowXZ01"></Icon>
            <div className="name">
              071arrowXZ01
            </div>
            <div className="code-name">.icon071arrowXZ01
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon330wuxinhao2"></Icon>
            <div className="name">
              330wuxinhao2
            </div>
            <div className="code-name">.icon330wuxinhao2
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon090top02"></Icon>
            <div className="name">
              090top02
            </div>
            <div className="code-name">.icon090top02
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon351"></Icon>
            <div className="name">
              351
            </div>
            <div className="code-name">.icon351
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon098zhome01"></Icon>
            <div className="name">
              098zhome01
            </div>
            <div className="code-name">.icon098zhome01
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon220equipment"></Icon>
            <div className="name">
              220equipment
            </div>
            <div className="code-name">.icon220equipment
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon091under02"></Icon>
            <div className="name">
              091under02
            </div>
            <div className="code-name">.icon091under02
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon256cross07"></Icon>
            <div className="name">
              256cross07
            </div>
            <div className="code-name">.icon256cross07
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon078arrowXX03"></Icon>
            <div className="name">
              078arrowXX03
            </div>
            <div className="code-name">.icon078arrowXX03
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon344"></Icon>
            <div className="name">
              344
            </div>
            <div className="code-name">.icon344
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon101user02"></Icon>
            <div className="name">
              101user02
            </div>
            <div className="code-name">.icon101user02
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon334money04"></Icon>
            <div className="name">
              334money04
            </div>
            <div className="code-name">.icon334money04
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon092top01"></Icon>
            <div className="name">
              092top01
            </div>
            <div className="code-name">.icon092top01
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon337Mean"></Icon>
            <div className="name">
              337Mean
            </div>
            <div className="code-name">.icon337Mean
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon086arrowXY04"></Icon>
            <div className="name">
              086arrowXY04
            </div>
            <div className="code-name">.icon086arrowXY04
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon340"></Icon>
            <div className="name">
              340
            </div>
            <div className="code-name">.icon340
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon083arrowXS04"></Icon>
            <div className="name">
              083arrowXS04
            </div>
            <div className="code-name">.icon083arrowXS04
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon300bold"></Icon>
            <div className="name">
              300bold
            </div>
            <div className="code-name">.icon300bold
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon105userSC"></Icon>
            <div className="name">
              105userSC
            </div>
            <div className="code-name">.icon105userSC
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon332"></Icon>
            <div className="name">
              332
            </div>
            <div className="code-name">.icon332
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon103bookTX"></Icon>
            <div className="name">
              103bookTX
            </div>
            <div className="code-name">.icon103bookTX
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon316alignLeft"></Icon>
            <div className="name">
              316align Left
            </div>
            <div className="code-name">.icon316alignLeft
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon089switch"></Icon>
            <div className="name">
              089switch
            </div>
            <div className="code-name">.icon089switch
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon355"></Icon>
            <div className="name">
              355
            </div>
            <div className="code-name">.icon355
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon064upload02"></Icon>
            <div className="name">
              064upload02
            </div>
            <div className="code-name">.icon064upload02
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon329mailbox"></Icon>
            <div className="name">
              329 mailbox
            </div>
            <div className="code-name">.icon329mailbox
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon100user01"></Icon>
            <div className="name">
              100user01
            </div>
            <div className="code-name">.icon100user01
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon353"></Icon>
            <div className="name">
              353
            </div>
            <div className="code-name">.icon353
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon094first"></Icon>
            <div className="name">
              094first
            </div>
            <div className="code-name">.icon094first
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon359"></Icon>
            <div className="name">
              359
            </div>
            <div className="code-name">.icon359
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon102users"></Icon>
            <div className="name">
              102users
            </div>
            <div className="code-name">.icon102users
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon330"></Icon>
            <div className="name">
              330
            </div>
            <div className="code-name">.icon330
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon117mail"></Icon>
            <div className="name">
              117mail
            </div>
            <div className="code-name">.icon117mail
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon334"></Icon>
            <div className="name">
              334
            </div>
            <div className="code-name">.icon334
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon044enlarge"></Icon>
            <div className="name">
              044enlarge
            </div>
            <div className="code-name">.icon044enlarge
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon357"></Icon>
            <div className="name">
              357
            </div>
            <div className="code-name">.icon357
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon072arrowXY01"></Icon>
            <div className="name">
              072arrowXY01
            </div>
            <div className="code-name">.icon072arrowXY01
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon336min02"></Icon>
            <div className="name">
              336min02
            </div>
            <div className="code-name">.icon336min02
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon099zhome02"></Icon>
            <div className="name">
              099zhome02
            </div>
            <div className="code-name">.icon099zhome02
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon349"></Icon>
            <div className="name">
              349
            </div>
            <div className="code-name">.icon349
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon048window"></Icon>
            <div className="name">
              048window
            </div>
            <div className="code-name">.icon048window
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon350"></Icon>
            <div className="name">
              350
            </div>
            <div className="code-name">.icon350
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon095last"></Icon>
            <div className="name">
              095last
            </div>
            <div className="code-name">.icon095last
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon352"></Icon>
            <div className="name">
              352
            </div>
            <div className="code-name">.icon352
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon068upload01"></Icon>
            <div className="name">
              068upload01
            </div>
            <div className="code-name">.icon068upload01
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon356"></Icon>
            <div className="name">
              356
            </div>
            <div className="code-name">.icon356
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon106collect"></Icon>
            <div className="name">
              106collect
            </div>
            <div className="code-name">.icon106collect
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon360"></Icon>
            <div className="name">
              360
            </div>
            <div className="code-name">.icon360
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon129voice03"></Icon>
            <div className="name">
              129voice03
            </div>
            <div className="code-name">.icon129voice03
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon342"></Icon>
            <div className="name">
              342
            </div>
            <div className="code-name">.icon342
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon097next"></Icon>
            <div className="name">
              097next
            </div>
            <div className="code-name">.icon097next
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon361"></Icon>
            <div className="name">
              361
            </div>
            <div className="code-name">.icon361
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon113video02"></Icon>
            <div className="name">
              113video02
            </div>
            <div className="code-name">.icon113video02
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon354"></Icon>
            <div className="name">
              354
            </div>
            <div className="code-name">.icon354
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon111image"></Icon>
            <div className="name">
              111image
            </div>
            <div className="code-name">.icon111image
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon365"></Icon>
            <div className="name">
              365
            </div>
            <div className="code-name">.icon365
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon118ellipsis"></Icon>
            <div className="name">
              118ellipsis
            </div>
            <div className="code-name">.icon118ellipsis
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon358"></Icon>
            <div className="name">
              358
            </div>
            <div className="code-name">.icon358
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon116key"></Icon>
            <div className="name">
              116key
            </div>
            <div className="code-name">.icon116key
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon371"></Icon>
            <div className="name">
              371
            </div>
            <div className="code-name">.icon371
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon133follow02"></Icon>
            <div className="name">
              133follow02
            </div>
            <div className="code-name">.icon133follow02
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon363"></Icon>
            <div className="name">
              363
            </div>
            <div className="code-name">.icon363
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon120menu02"></Icon>
            <div className="name">
              120menu02
            </div>
            <div className="code-name">.icon120menu02
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon369"></Icon>
            <div className="name">
              369
            </div>
            <div className="code-name">.icon369
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon082arrowXY05"></Icon>
            <div className="name">
              082arrowXY05
            </div>
            <div className="code-name">.icon082arrowXY05
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon346"></Icon>
            <div className="name">
              346
            </div>
            <div className="code-name">.icon346
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon115unlock"></Icon>
            <div className="name">
              115unlock
            </div>
            <div className="code-name">.icon115unlock
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon368"></Icon>
            <div className="name">
              368
            </div>
            <div className="code-name">.icon368
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon109bell"></Icon>
            <div className="name">
              109bell
            </div>
            <div className="code-name">.icon109bell
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon367"></Icon>
            <div className="name">
              367
            </div>
            <div className="code-name">.icon367
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon119menu01"></Icon>
            <div className="name">
              119menu01
            </div>
            <div className="code-name">.icon119menu01
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon372"></Icon>
            <div className="name">
              372
            </div>
            <div className="code-name">.icon372
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon127voice01"></Icon>
            <div className="name">
              127voice01
            </div>
            <div className="code-name">.icon127voice01
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon364"></Icon>
            <div className="name">
              364
            </div>
            <div className="code-name">.icon364
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon104userXZ"></Icon>
            <div className="name">
              104userXZ
            </div>
            <div className="code-name">.icon104userXZ
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon373"></Icon>
            <div className="name">
              373
            </div>
            <div className="code-name">.icon373
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon132follow01"></Icon>
            <div className="name">
              132follow01
            </div>
            <div className="code-name">.icon132follow01
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon362"></Icon>
            <div className="name">
              362
            </div>
            <div className="code-name">.icon362
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon139star01"></Icon>
            <div className="name">
              139star01
            </div>
            <div className="code-name">.icon139star01
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon306hollowcircle"></Icon>
            <div className="name">
              306hollowcircle
            </div>
            <div className="code-name">.icon306hollowcircle
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon137step01"></Icon>
            <div className="name">
              137step01
            </div>
            <div className="code-name">.icon137step01
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon314alignhorizontalcenter"></Icon>
            <div className="name">
              314align horizontal center
            </div>
            <div className="code-name">.icon314alignhorizontalcenter
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon121menu03"></Icon>
            <div className="name">
              121menu03
            </div>
            <div className="code-name">.icon121menu03
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon366"></Icon>
            <div className="name">
              366
            </div>
            <div className="code-name">.icon366
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon080arrowXY03"></Icon>
            <div className="name">
              080arrowXY03
            </div>
            <div className="code-name">.icon080arrowXY03
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon333"></Icon>
            <div className="name">
              333
            </div>
            <div className="code-name">.icon333
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon076arrowXY02"></Icon>
            <div className="name">
              076arrowXY02
            </div>
            <div className="code-name">.icon076arrowXY02
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon335"></Icon>
            <div className="name">
              335
            </div>
            <div className="code-name">.icon335
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon125sound"></Icon>
            <div className="name">
              125sound
            </div>
            <div className="code-name">.icon125sound
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon348"></Icon>
            <div className="name">
              348
            </div>
            <div className="code-name">.icon348
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon110camera"></Icon>
            <div className="name">
              110camera
            </div>
            <div className="code-name">.icon110camera
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon370"></Icon>
            <div className="name">
              370
            </div>
            <div className="code-name">.icon370
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon131keyboard"></Icon>
            <div className="name">
              131keyboard
            </div>
            <div className="code-name">.icon131keyboard
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon124notice"></Icon>
            <div className="name">
              124notice
            </div>
            <div className="code-name">.icon124notice
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon130wifi"></Icon>
            <div className="name">
              130wifi
            </div>
            <div className="code-name">.icon130wifi
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon108share"></Icon>
            <div className="name">
              108share
            </div>
            <div className="code-name">.icon108share
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon107meeting"></Icon>
            <div className="name">
              107meeting
            </div>
            <div className="code-name">.icon107meeting
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon152error40401"></Icon>
            <div className="name">
              152error40401
            </div>
            <div className="code-name">.icon152error40401
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon141send"></Icon>
            <div className="name">
              141send
            </div>
            <div className="code-name">.icon141send
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon304curve"></Icon>
            <div className="name">
              304curve
            </div>
            <div className="code-name">.icon304curve
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon154copy"></Icon>
            <div className="name">
              154copy
            </div>
            <div className="code-name">.icon154copy
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon320HorizontalCenters"></Icon>
            <div className="name">
              320Horizontal Centers
            </div>
            <div className="code-name">.icon320HorizontalCenters
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon149emoticon02"></Icon>
            <div className="name">
              149emoticon02
            </div>
            <div className="code-name">.icon149emoticon02
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon338"></Icon>
            <div className="name">
              338
            </div>
            <div className="code-name">.icon338
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon157clipboard"></Icon>
            <div className="name">
              157clipboard
            </div>
            <div className="code-name">.icon157clipboard
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon148emoticon01"></Icon>
            <div className="name">
              148emoticon01
            </div>
            <div className="code-name">.icon148emoticon01
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon145message03"></Icon>
            <div className="name">
              145message03
            </div>
            <div className="code-name">.icon145message03
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon123power"></Icon>
            <div className="name">
              123power
            </div>
            <div className="code-name">.icon123power
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon135good01"></Icon>
            <div className="name">
              135good01
            </div>
            <div className="code-name">.icon135good01
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon165ranking"></Icon>
            <div className="name">
              165ranking
            </div>
            <div className="code-name">.icon165ranking
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon147message05"></Icon>
            <div className="name">
              147message05
            </div>
            <div className="code-name">.icon147message05
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon143message01"></Icon>
            <div className="name">
              143message01
            </div>
            <div className="code-name">.icon143message01
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon171excel"></Icon>
            <div className="name">
              171excel
            </div>
            <div className="code-name">.icon171excel
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon114lock"></Icon>
            <div className="name">
              114lock
            </div>
            <div className="code-name">.icon114lock
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon122find"></Icon>
            <div className="name">
              122find
            </div>
            <div className="code-name">.icon122find
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon153error40402"></Icon>
            <div className="name">
              153error40402
            </div>
            <div className="code-name">.icon153error40402
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon163submit"></Icon>
            <div className="name">
              163submit
            </div>
            <div className="code-name">.icon163submit
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon151emoticon04"></Icon>
            <div className="name">
              151emoticon04
            </div>
            <div className="code-name">.icon151emoticon04
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon177file"></Icon>
            <div className="name">
              177file
            </div>
            <div className="code-name">.icon177file
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon175xml"></Icon>
            <div className="name">
              175xml
            </div>
            <div className="code-name">.icon175xml
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon169paper"></Icon>
            <div className="name">
              169paper
            </div>
            <div className="code-name">.icon169paper
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon159examine"></Icon>
            <div className="name">
              159examine
            </div>
            <div className="code-name">.icon159examine
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon160task01"></Icon>
            <div className="name">
              160task01
            </div>
            <div className="code-name">.icon160task01
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon179chartZ"></Icon>
            <div className="name">
              179chartZ
            </div>
            <div className="code-name">.icon179chartZ
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon155cut"></Icon>
            <div className="name">
              155cut
            </div>
            <div className="code-name">.icon155cut
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon167list02"></Icon>
            <div className="name">
              167list02
            </div>
            <div className="code-name">.icon167list02
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon173pdf"></Icon>
            <div className="name">
              173pdf
            </div>
            <div className="code-name">.icon173pdf
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon138step02"></Icon>
            <div className="name">
              138step02
            </div>
            <div className="code-name">.icon138step02
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon134appoint"></Icon>
            <div className="name">
              134appoint
            </div>
            <div className="code-name">.icon134appoint
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon136good02"></Icon>
            <div className="name">
              136good02
            </div>
            <div className="code-name">.icon136good02
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon144message02"></Icon>
            <div className="name">
              144message02
            </div>
            <div className="code-name">.icon144message02
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon162task03"></Icon>
            <div className="name">
              162task03
            </div>
            <div className="code-name">.icon162task03
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon187grid"></Icon>
            <div className="name">
              187grid
            </div>
            <div className="code-name">.icon187grid
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon161task02"></Icon>
            <div className="name">
              161task02
            </div>
            <div className="code-name">.icon161task02
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon126mute"></Icon>
            <div className="name">
              126mute
            </div>
            <div className="code-name">.icon126mute
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon191clock"></Icon>
            <div className="name">
              191clock
            </div>
            <div className="code-name">.icon191clock
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon178restore"></Icon>
            <div className="name">
              178restore
            </div>
            <div className="code-name">.icon178restore
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon185statistics"></Icon>
            <div className="name">
              185statistics
            </div>
            <div className="code-name">.icon185statistics
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon201printer"></Icon>
            <div className="name">
              201printer
            </div>
            <div className="code-name">.icon201printer
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon182chartB02"></Icon>
            <div className="name">
              182chartB02
            </div>
            <div className="code-name">.icon182chartB02
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon181chartB01"></Icon>
            <div className="name">
              181chartB01
            </div>
            <div className="code-name">.icon181chartB01
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon195keyword"></Icon>
            <div className="name">
              195keyword
            </div>
            <div className="code-name">.icon195keyword
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon189flow"></Icon>
            <div className="name">
              189flow
            </div>
            <div className="code-name">.icon189flow
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon199book01"></Icon>
            <div className="name">
              199book01
            </div>
            <div className="code-name">.icon199book01
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon142light"></Icon>
            <div className="name">
              142light
            </div>
            <div className="code-name">.icon142light
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon164sort"></Icon>
            <div className="name">
              164sort
            </div>
            <div className="code-name">.icon164sort
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon168tag01"></Icon>
            <div className="name">
              168tag01
            </div>
            <div className="code-name">.icon168tag01
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon205count"></Icon>
            <div className="name">
              205count
            </div>
            <div className="code-name">.icon205count
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon197hourglass01"></Icon>
            <div className="name">
              197hourglass01
            </div>
            <div className="code-name">.icon197hourglass01
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon166list01"></Icon>
            <div className="name">
              166list01
            </div>
            <div className="code-name">.icon166list01
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon156paste"></Icon>
            <div className="name">
              156paste
            </div>
            <div className="code-name">.icon156paste
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon203enclosure"></Icon>
            <div className="name">
              203enclosure
            </div>
            <div className="code-name">.icon203enclosure
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon193clothes"></Icon>
            <div className="name">
              193clothes
            </div>
            <div className="code-name">.icon193clothes
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon183chartZH01"></Icon>
            <div className="name">
              183chartZH01
            </div>
            <div className="code-name">.icon183chartZH01
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon194tag02"></Icon>
            <div className="name">
              194tag02
            </div>
            <div className="code-name">.icon194tag02
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon211money04"></Icon>
            <div className="name">
              211money04
            </div>
            <div className="code-name">.icon211money04
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon207calculator02"></Icon>
            <div className="name">
              207calculator02
            </div>
            <div className="code-name">.icon207calculator02
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon174txt"></Icon>
            <div className="name">
              174txt
            </div>
            <div className="code-name">.icon174txt
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon213trophy02"></Icon>
            <div className="name">
              213trophy02
            </div>
            <div className="code-name">.icon213trophy02
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon170word"></Icon>
            <div className="name">
              170word
            </div>
            <div className="code-name">.icon170word
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon225scan"></Icon>
            <div className="name">
              225scan
            </div>
            <div className="code-name">.icon225scan
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon206calculator01"></Icon>
            <div className="name">
              206calculator01
            </div>
            <div className="code-name">.icon206calculator01
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon150emoticon03"></Icon>
            <div className="name">
              150emoticon03
            </div>
            <div className="code-name">.icon150emoticon03
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon158batch"></Icon>
            <div className="name">
              158batch
            </div>
            <div className="code-name">.icon158batch
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon112video01"></Icon>
            <div className="name">
              112video01
            </div>
            <div className="code-name">.icon112video01
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon221computer"></Icon>
            <div className="name">
              221computer
            </div>
            <div className="code-name">.icon221computer
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon198hourglass02"></Icon>
            <div className="name">
              198hourglass02
            </div>
            <div className="code-name">.icon198hourglass02
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon172ppt"></Icon>
            <div className="name">
              172ppt
            </div>
            <div className="code-name">.icon172ppt
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon190tree"></Icon>
            <div className="name">
              190tree
            </div>
            <div className="code-name">.icon190tree
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon217shield03"></Icon>
            <div className="name">
              217shield03
            </div>
            <div className="code-name">.icon217shield03
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon209money02"></Icon>
            <div className="name">
              209money02
            </div>
            <div className="code-name">.icon209money02
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon219shield05"></Icon>
            <div className="name">
              219shield05
            </div>
            <div className="code-name">.icon219shield05
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon233logoZH01"></Icon>
            <div className="name">
              233logoZH01
            </div>
            <div className="code-name">.icon233logoZH01
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon146message04"></Icon>
            <div className="name">
              146message04
            </div>
            <div className="code-name">.icon146message04
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon215shield01"></Icon>
            <div className="name">
              215shield01
            </div>
            <div className="code-name">.icon215shield01
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon176zip"></Icon>
            <div className="name">
              176zip
            </div>
            <div className="code-name">.icon176zip
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon186layout"></Icon>
            <div className="name">
              186layout
            </div>
            <div className="code-name">.icon186layout
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon210money03"></Icon>
            <div className="name">
              210money03
            </div>
            <div className="code-name">.icon210money03
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon229circlePY"></Icon>
            <div className="name">
              229circlePY
            </div>
            <div className="code-name">.icon229circlePY
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon214integral"></Icon>
            <div className="name">
              214integral
            </div>
            <div className="code-name">.icon214integral
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon241user04"></Icon>
            <div className="name">
              241user04
            </div>
            <div className="code-name">.icon241user04
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon227wechat"></Icon>
            <div className="name">
              227wechat
            </div>
            <div className="code-name">.icon227wechat
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon237chartLD"></Icon>
            <div className="name">
              237chartLD
            </div>
            <div className="code-name">.icon237chartLD
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon242arrowXS05"></Icon>
            <div className="name">
              242arrowXS05
            </div>
            <div className="code-name">.icon242arrowXS05
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon250power01"></Icon>
            <div className="name">
              250power01
            </div>
            <div className="code-name">.icon250power01
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon245arrowXY06"></Icon>
            <div className="name">
              245arrowXY06
            </div>
            <div className="code-name">.icon245arrowXY06
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon223shake"></Icon>
            <div className="name">
              223shake
            </div>
            <div className="code-name">.icon223shake
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon202seal"></Icon>
            <div className="name">
              202seal
            </div>
            <div className="code-name">.icon202seal
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon243arrowXX05"></Icon>
            <div className="name">
              243arrowXX05
            </div>
            <div className="code-name">.icon243arrowXX05
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon253question01"></Icon>
            <div className="name">
              253question01
            </div>
            <div className="code-name">.icon253question01
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon216shield02"></Icon>
            <div className="name">
              216shield02
            </div>
            <div className="code-name">.icon216shield02
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon222mobilephone"></Icon>
            <div className="name">
              222mobilephone
            </div>
            <div className="code-name">.icon222mobilephone
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon218shield04"></Icon>
            <div className="name">
              218shield04
            </div>
            <div className="code-name">.icon218shield04
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon239menu04"></Icon>
            <div className="name">
              239menu04
            </div>
            <div className="code-name">.icon239menu04
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon255check04"></Icon>
            <div className="name">
              255check04
            </div>
            <div className="code-name">.icon255check04
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon235chartSD"></Icon>
            <div className="name">
              235chartSD
            </div>
            <div className="code-name">.icon235chartSD
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon128voice02"></Icon>
            <div className="name">
              128voice02
            </div>
            <div className="code-name">.icon128voice02
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon192prompt"></Icon>
            <div className="name">
              192prompt
            </div>
            <div className="code-name">.icon192prompt
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon140star02"></Icon>
            <div className="name">
              140star02
            </div>
            <div className="code-name">.icon140star02
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon254notification01"></Icon>
            <div className="name">
              254notification01
            </div>
            <div className="code-name">.icon254notification01
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon261microphone"></Icon>
            <div className="name">
              261microphone
            </div>
            <div className="code-name">.icon261microphone
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon265plus06"></Icon>
            <div className="name">
              265plus06
            </div>
            <div className="code-name">.icon265plus06
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon269calendar03"></Icon>
            <div className="name">
              269calendar03
            </div>
            <div className="code-name">.icon269calendar03
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon249arrowXY07"></Icon>
            <div className="name">
              249arrowXY07
            </div>
            <div className="code-name">.icon249arrowXY07
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon180chartX"></Icon>
            <div className="name">
              180chartX
            </div>
            <div className="code-name">.icon180chartX
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon224shock"></Icon>
            <div className="name">
              224shock
            </div>
            <div className="code-name">.icon224shock
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon184chartZH02"></Icon>
            <div className="name">
              184chartZH02
            </div>
            <div className="code-name">.icon184chartZH02
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon188table"></Icon>
            <div className="name">
              188table
            </div>
            <div className="code-name">.icon188table
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon263star03"></Icon>
            <div className="name">
              263star03
            </div>
            <div className="code-name">.icon263star03
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon257arrowXZ08"></Icon>
            <div className="name">
              257arrowXZ08
            </div>
            <div className="code-name">.icon257arrowXZ08
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon262menu05"></Icon>
            <div className="name">
              262menu05
            </div>
            <div className="code-name">.icon262menu05
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon277clock"></Icon>
            <div className="name">
              277clock
            </div>
            <div className="code-name">.icon277clock
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon259send01"></Icon>
            <div className="name">
              259send01
            </div>
            <div className="code-name">.icon259send01
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon iconcamera-fill"></Icon>
            <div className="name">
              camera-fill
            </div>
            <div className="code-name">.iconcamera-fill
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon267layoutTZ"></Icon>
            <div className="name">
              267layoutTZ
            </div>
            <div className="code-name">.icon267layoutTZ
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon iconcard-fill"></Icon>
            <div className="name">
              card-fill
            </div>
            <div className="code-name">.iconcard-fill
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon232Android"></Icon>
            <div className="name">
              232Android
            </div>
            <div className="code-name">.icon232Android
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon iconcart-fill"></Icon>
            <div className="name">
              cart-fill
            </div>
            <div className="code-name">.iconcart-fill
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon270imagePS"></Icon>
            <div className="name">
              270imagePS
            </div>
            <div className="code-name">.icon270imagePS
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icongood-fill"></Icon>
            <div className="name">
              good-fill
            </div>
            <div className="code-name">.icongood-fill
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon273route"></Icon>
            <div className="name">
              273route
            </div>
            <div className="code-name">.icon273route
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon iconcopy-fill"></Icon>
            <div className="name">
              copy-fill
            </div>
            <div className="code-name">.iconcopy-fill
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon271location05"></Icon>
            <div className="name">
              271location05
            </div>
            <div className="code-name">.icon271location05
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon iconday-fill"></Icon>
            <div className="name">
              day-fill
            </div>
            <div className="code-name">.iconday-fill
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon230mapBD"></Icon>
            <div className="name">
              230mapBD
            </div>
            <div className="code-name">.icon230mapBD
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon iconbad-fill"></Icon>
            <div className="name">
              bad-fill
            </div>
            <div className="code-name">.iconbad-fill
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon283zhome05"></Icon>
            <div className="name">
              283zhome05
            </div>
            <div className="code-name">.icon283zhome05
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon iconimg-fill"></Icon>
            <div className="name">
              img-fill
            </div>
            <div className="code-name">.iconimg-fill
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon281earth"></Icon>
            <div className="name">
              281earth
            </div>
            <div className="code-name">.icon281earth
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon iconhot-fill"></Icon>
            <div className="name">
              hot-fill
            </div>
            <div className="code-name">.iconhot-fill
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon247arrowXX05"></Icon>
            <div className="name">
              247arrowXX05
            </div>
            <div className="code-name">.icon247arrowXX05
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon iconcommunity-fill"></Icon>
            <div className="name">
              community-fill
            </div>
            <div className="code-name">.iconcommunity-fill
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon279shield"></Icon>
            <div className="name">
              279shield
            </div>
            <div className="code-name">.icon279shield
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon iconnight-fill"></Icon>
            <div className="name">
              night-fill
            </div>
            <div className="code-name">.iconnight-fill
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon231iOS"></Icon>
            <div className="name">
              231iOS
            </div>
            <div className="code-name">.icon231iOS
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon iconsafety-fill"></Icon>
            <div className="name">
              safety-fill
            </div>
            <div className="code-name">.iconsafety-fill
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon246arrowXS06"></Icon>
            <div className="name">
              246arrowXS06
            </div>
            <div className="code-name">.icon246arrowXS06
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon iconvoice-fill"></Icon>
            <div className="name">
              voice-fill
            </div>
            <div className="code-name">.iconvoice-fill
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon274remind"></Icon>
            <div className="name">
              274remind
            </div>
            <div className="code-name">.icon274remind
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon iconashbin-fill"></Icon>
            <div className="name">
              ashbin-fill
            </div>
            <div className="code-name">.iconashbin-fill
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon285menu07"></Icon>
            <div className="name">
              285menu07
            </div>
            <div className="code-name">.icon285menu07
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon iconposition-fill"></Icon>
            <div className="name">
              position-fill
            </div>
            <div className="code-name">.iconposition-fill
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon289folder01"></Icon>
            <div className="name">
              289folder01
            </div>
            <div className="code-name">.icon289folder01
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon iconhome-fill"></Icon>
            <div className="name">
              home-fill
            </div>
            <div className="code-name">.iconhome-fill
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon251setting01"></Icon>
            <div className="name">
              251setting01
            </div>
            <div className="code-name">.icon251setting01
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icontop-btn-fill"></Icon>
            <div className="name">
              top-btn-fill
            </div>
            <div className="code-name">.icontop-btn-fill
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon275error"></Icon>
            <div className="name">
              275error
            </div>
            <div className="code-name">.icon275error
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon iconleft-btn-fill"></Icon>
            <div className="name">
              left-btn-fill
            </div>
            <div className="code-name">.iconleft-btn-fill
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icon236chartYH"></Icon>
            <div className="name">
              236chartYH
            </div>
            <div className="code-name">.icon236chartYH
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon iconfanhui"></Icon>
            <div className="name">
              返回
            </div>
            <div className="code-name">.iconfanhui
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon icondaohang"></Icon>
            <div className="name">
              导航
            </div>
            <div className="code-name">.icondaohang
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon iconyonghu"></Icon>
            <div className="name">
              用户
            </div>
            <div className="code-name">.iconyonghu
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon iconmimacopy"></Icon>
            <div className="name">
              密码 copy
            </div>
            <div className="code-name">.iconmimacopy
            </div>
          </li>
          
          <li className="dib">
            <Icon type="icon iconclose"></Icon>
            <div className="name">
              关闭
            </div>
            <div className="code-name">.iconclose
            </div>
          </li>
          
        </ul>
  
      <pre className="icon-code">
      <code>
          {code}
      </code>
      </pre>
      <table className="doc">
        <thead className="doc-header">
          <tr>
            <th>参数</th>
            <th>说明</th>
            <th>类型</th>
            <th>值</th>
          </tr>
        </thead>
        <tbody className="doc-body">
          <tr>
            <td>size</td>
            <td>button的规格</td>
            <td>ButtonSize：string</td>
            <td>Large = 'lg',
              Small = 'sm'</td>
          </tr>
          <tr>
            <td>disabled</td>
            <td>是否禁用</td>
            <td>boolean</td>
            <td>true,false</td>
          </tr>
          <tr>
            <td>btnType</td>
            <td>button的类型</td>
            <td>ButtonType：string</td>
            <td>Primary = 'primary',Default = 'default',Danger = 'danger',Warning = 'warning',Success = 'success',Link = 'link'</td>
          </tr>
          <tr>
            <td>children</td>
            <td>Button标签中的子节点</td>
            <td>React.ReactNode</td>
            <td>-</td>
          </tr>
          <tr>
            <td>href</td>
            <td>跳转链接，只能用于btnType='link'</td>
            <td>string</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default IconView