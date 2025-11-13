import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from "lucide-react";
import TimeLine from './timeline';
import '../../styles/index.css';
import '../../fillerstylepageuntilwearesorted.css';
import '../mtOliveArchive/mtOliveArchive.css';
import '../../mtolivearchive.css';

export default function AboutChurch() {

  return (
    <div className="center-page-about">
      <div className="left-justify-about">
        <h2>The Archive Project Team</h2>
          <p>The Mt. Olive Missionary Baptist History project is a collaboration between the Mt. Olive History Ministry and the Flint Neighborhood History Project.</p>
          <p>The items in the Mt. Olive Missionary Baptist Church archive were gathered by members of the History Ministry between 2023 and 2025 under the leadership of Melva Viltz. Members of the archive working group include Betty Tippor, Wanda Harden, Alfreda Duncan, and Earnest and Nancy Pouncy. Items were also shared by Kenneth Gillard. The collection was preserved, catalogued, and digitized by Natalie Frary under the direction of Vickie Larsen and Pamela Hawkins of the Flint Neighborhood History Project. The digitization protocols and metadata structure were developed by Natalie Frary and Vickie Larsen in consultation with Anne Cong-Huyen, Joe Bauers, and Matt Caruthers, members of the Anti-Racist Digital Research Initiatives support team at the University of Michigan College of Literature Science and the Arts. Archive-quality digital files are owned by Mt. Olive Missionary Baptist church.</p>
      </div>
      <div className="left-justify-about">
        <h2>The Research</h2>
          <p>The research for the written history in these pages was conducted by Vickie Larsen of Morningside University and Natalie Frary of the University of Michigan-Flint. It is based upon historical narratives in the church archive and on primary sources including United States and Canadian census data; birth, marriage, military, and death records; City Directories; cemetery records; the Digital Archives of Ontario; Genesee County property records; the 1915 Sanborn insurance maps of Flint; and newspapers including The Flint Journal, The Lansing Journal, The Michigan Democrat, The Freeman, and the Bronze Reporter. Secondary sources used in developing this history are as follows:</p>
            <ul>
              <li>Amherstburg Regular Missionary Baptist Association, A History of the Amherstburg Regular Missionary Baptist Association, Its Auxiliaries and Churches: Compiled from the Minutes and Historical Essays, 1940.</li>
              <li>Crowder, Norman Kenneth. Early Ontario Settlers: A Source Book. Genealogical Pub. Co., Baltimore, 1993.</li>
              <li>De B’béri, Boulou Ebanda, Nina Reid-Maroney, Handel Kashope Wright, and Afua Cooper. The Promised Land: History and Historiography of the Black Experience in Chatham-Kent's Settlements and Beyond. Series: African & Diasporic Cultural Studies. University of Toronto Press, 2014.</li>
              <li>Kingsville-Gosfield Heritage Society, Kingsville 1790-2000: A Stroll Through Time, 2 vols. Kingsville-Gosfield Heritage Society, 2003.</li>
              <li>Smardz Frost, Karolyn, Veta Smith Tucker, and David W. Blight, editors. A Fluid Frontier : Slavery, Resistance, and the Underground Railroad in the Detroit River Borderland. Wayne State University Press. Detroit, 2016.</li>
            </ul>
      </div>
      <div className="left-justify-about">
        <h2>Digital Development</h2>
          <p>Digital video and audio editing was performed by Vickie Larsen. Digitized materials were converted into accessible formats to ensure compatibility with web viewing and were configured for a searchable database for web viewing by student developers Simon Zychowski and Mackailee Longobricco of Morningside University. These same developers developed the user interface.</p>
      </div>
      <div className="left-justify-about">
        <h2>Digital Deployment</h2>
          <p>This website is hosted on the google cloud platoform with the backend and data also functioning from there. It has a repository on github that sends automatic updates to the cloud deployed site whenever the main branch is edited. This allows modification for future work from other humanities passionate CS majors. Allowing the archive to grow and be updated as our knowlege about the Mt. Olive history grows.</p>
      </div>
      <div className="left-justify-about">
        <h2>Additions and Concerns</h2>
          <p>Additions to the physical or digital Mt. Olive Missionary Baptist Church archive can be shared with members of the History Ministry or brought to the church office. Please direct any revisions or corrections to existing materials or text to Vickie Larsen at larsenv@morningside.edu</p>
      </div>
      <div className="left-justify-about">
        <h2>Permissions</h2>
          <p>The items on this site are covered by a Non-Commercial Creative Commons License. Members of the public are encouraged to use its contents for non-commercial purposes. Individuals interested in using materials for commercial purposes must contact a member of the Mt. Olive Missionary Baptist History Ministry for permission to do so.</p>
      </div>
      <div className="left-justify-about">
        <h2>Media Credits</h2>
          <p>
            This Far By Faith, Mt. Olive Missionary Baptist Church, Flint
            Choir Recordings, Mt. Olive Missionary Baptist Church, Flint and
            Zion Baptist Church, Washington DC
          </p>
      </div>
    </div>
  );
}
