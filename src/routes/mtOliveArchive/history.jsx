import React from 'react';
import '../mtOliveArchive/mtOliveArchive.css';
import '../mtOliveArchive/timeline-page.css';

export default function History() {
  return (
    <div className="history-page-container">
      <div className="history-banner">
        <h1 className="history-main-title">History of Mt. Olive Missionary Baptist Church</h1>
      </div>

      <section className="history-section">
        <h2>Introduction</h2>
        <p>
          Mt. Olive began in 1907 as what the Flint Journal called the “colored Baptist mission,”
          meeting at the home of Sarah Howard at 507 9th Street on the Southside of Flint.
          The Southside was already a growing center of Black life. Mt. Olive’s founders were
          recent emigrants from Ontario, Canada, the children of people who had fled slavery
          and built Black settlements across the Detroit River. With support from Rev. Clarence E. Lapp
          of First Baptist Church of Flint (later Woodside, now The People’s Church), they organized a
          mission that became Mt. Olive Missionary Baptist Church. Their descendants carried this legacy
          forward through generations.
        </p>
      </section>

      <section className="history-section">
        <h2>Before Mt. Olive</h2>
        <p>
          Both Mt. Olive and The People’s Church are members of the American Baptist Churches USA (ABCUSA),
          founded in 1907 as the Northern Baptist Convention. It emerged from the Triennial Convention (1814),
          which opposed slavery in missions—leading to a Southern Baptist secession in 1840. The ABCUSA included
          organizations such as the American Baptist Home Mission Society and the Baptist Education Society.
          In 1911, the Free Will Baptist Convention merged with the Northern Baptists.
        </p>
        <p>
          After 1834, when slavery was abolished in the British Empire, many refugees fled across the
          Detroit River into Canada. They formed self-sufficient rural Black settlements and built churches
          and Sunday schools that supported their communities. These settlements became foundations of
          free Black identity and leadership.
        </p>
        <p>
          Many leaders returned to Michigan post-Civil War to build Black churches and neighborhoods.
          Baptist men and women from Amherstburg, Dresden, Chatham, and others founded churches across
          Michigan—in Grand Rapids, Lansing, Flint, and more. Mt. Olive’s founders were among them.
          Many settled on Flint’s Southside as Billy Durant was still building carriages.
        </p>
      </section>

      <section className="history-section">
        <h2>Founding Members</h2>
        <p>
          The early members of Mt. Olive lived, worked, and worshipped in Flint. Many are buried
          in local cemeteries. Some of those remembered include:
        </p>
        <ul className="history-list">
          <li>H. Bethune</li>
          <li>George Morton</li>
          <li>H. Saunders</li>
          <li>H. Martin</li>
          <li>Mrs. Sarah Howard (and her daughter Neta)</li>
          <li>Mrs. Naomi Kelly</li>
          <li>Rev. William Lyons (his wife Margaret and daughter Edna)</li>
          <li>Mrs. M. Jenkins</li>
          <li>Mrs. L. Joiner</li>
          <li>Mrs. Hattie Morgan</li>
          <li>Arther Lawrence</li>
          <li>J.H. Johnson</li>
        </ul>
      </section>
    </div>
  );
}