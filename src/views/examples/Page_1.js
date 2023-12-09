/*!

=========================================================
* Paper Kit React - v1.3.2
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function Page_1() {
  return (
    <>
      <Container className="tim-container">
        <div className="title">
          <h1>Origins</h1>
        </div>
        <div id="typography">
          <Row>
            <div className="typography-line">
              <h3>
                <span className="note"></span>
                The emerald ash borer (Agrilus planipennis) originates from East Asia.  In its native habitat, the emerald ash borer plays a role in the natural balance of ecosystems by
                primarily targets weak or stressed ash trees. This aids the natural selection process by preying on trees that may be less fit, leaving more room for healthier or younger fauna 
                to develop. In it native region, the emerald ash borer's impact is typically limited, as its population is kept in check by various natural predators, and parasitoid wasps. 
                The beetle's presence contributes to the complex web of interactions within the Asian ecosystem, helping to maintain a balance between species.
              </h3>
            </div>
          </Row>
        </div>
        <div className="title">
          <h1>Introduction to United States</h1>
        </div>
        <div id="typography">
          <Row>
            <div className="typography-line">
              <h3>
                <span className="note"></span>
                The emerald ash borer was accidentally introduced to the United States in the early 2000s, likely by hitching a ride on infected ash wood used in shipping. As soon as they arrived, their impact was quickly seen - North American ash trees do not have the natural defenses that Asian ash trees have, and with few predators to reduce their numbers, American ash all over the northeast became infested. Now, over 8 billion trees over the range of 36 states are at risk from this one species.
              </h3>
            </div>
          </Row>
        </div>
        <div className="title">
          <h1>Life Cycle</h1>
        </div>
        <div id="typography">
          <Row>
            <div className="typography-line">
              <h3>
                <span className="note"></span>
                They lay their eggs in bark crevaces and in between layers, then when the larvae hatch they bore into the tree and feed on inner bark. After 4 feeding stages, the larvae hibernate, then emerge as adults, then continue the cycle. If enough of these larvae are present, the tree withers.              </h3>
            </div>
          </Row>
        </div>
        <div className="title">
          <h1>Damage to Trees</h1>
        </div>
        <div id="typography">
          <Row>
            <div className="typography-line">
              <h3>
                <span className="note"></span>
                Common signs of emerald ash borer activity is bark deformities (vertical cracks and growths out of the trunk), exit holes, woodpecker feeding holes, and yellowing foliage. However, damage to trees may not be present for years, so once signs are seen it is already too late. Once a tree is diseased, recovery is very unlikely.             
                </h3>
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/ASH_BORER_EFFECT.jpg")}
                />
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/B_F_2.jpg")}
                />
                </div>
          </Row>
        </div>
        <div className="title">
          <h1>Affects in New Jersey</h1>
        </div>
        <div id="typography">
          <Row>
            <div className="typography-line">
              <h3>
                <span className="note"></span>
                24% of forests in New Jersey contain ash trees (mostly located in Northwest NJ), and the lifespan of an infested tree is only 3-4 years. When an infested tree is found, its often removed to reduce the spread of the emerald ash borer.                 </h3>
            </div>
          </Row>
        </div>
        <div className="title">
          <h1>Combatting their Spread</h1>
        </div>
        <div id="typography">
          <Row>
            <div className="typography-line">
              <h3>
                <span className="note"></span>
                New England researches say that Spathius Galinae, a natural predator that coevolved with the Emerald Ash Borer, could be a key to combatting the borer’s spread. This is called biological control. 
              </h3>
              <h3>
                <span className="note"></span>
                Insecticides (soil injection within 18 inches of the trunk, or injection into the trunk itself), are also being used. Dinotefuran and Azadirachtin are two commonly used active ingredients in these insecticides. Both adults and larvae can be targeted - Adult insecticide is used in the spring before they lay eggs, and the larval insecticide is applied over winter as they winter under the bark. But they must be used preemptively, as once the tree’s vascularity is damaged, the tree is lost.  
              </h3>
            </div>
          </Row>
        </div>
      </Container>
    </>
  );
}

export default Page_1;
