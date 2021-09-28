import React from "react";
import "./breaking-bad.style.scss";
import { Tabs } from "antd";
import AboutComponent from "./components/about.component";
import EpisodeComponent from "./components/episode.component";
import CharacterComponent from "./components/character.component";
import DeathComponent from "./components/death.component";
import PhraseComponent from "./components/phrases.component";

const { TabPane } = Tabs;

export default class BreakingBadPage extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Breaking Bad</h1>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Sobre" key="1">
            <AboutComponent />
          </TabPane>
          <TabPane tab="Episódios" key="2">
            <EpisodeComponent />
          </TabPane>
          <TabPane tab="Personagens" key="3">
            <CharacterComponent />
          </TabPane>
          <TabPane tab="Mortes" key="4">
            <DeathComponent />
          </TabPane>
          <TabPane tab="Frases" key="5">
            <PhraseComponent />
          </TabPane>
        </Tabs>
      </div>
    );
  }
}
