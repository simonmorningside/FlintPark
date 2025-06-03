import React, { useState } from 'react';
import '../mtOliveArchive/mtOliveArchive.css';
import '../mtOliveArchive/history.css';
import history1 from '../../images/history1.png';
import history2 from '../../images/history2.png';
import history3 from '../../images/history3.png';
import history4 from '../../images/history4.png';
import history5 from '../../images/history5.png';
import history6 from '../../images/history6.png';
import history7 from '../../images/history7.png';


export default function History() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');

  const openModal = (src) => {
    setModalImage(src);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalImage('');
  };
  return (
    <div className="history-page-container">
      <div className="history-banner">
        <h1 className="history-main-title">Before Mt. Olive...</h1>
      </div>

      {modalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>✕</button>
            <img src={modalImage} alt="Enlarged view" className="modal-image" />
          </div>
        </div>
      )}

      <section className="history-section">
        <h2>Introduction</h2>
        <p>
          Mt. Olive, the oldest Black Baptist church in Flint, began as a series of organizing meetings in the home of founder Sarah F. Howard at 509 9th St. In those meetings, Howard and founder Rev. William Isaac Lyons (who proposed the name Mt. Olive) organized what the Flint Journal would call the “colored Baptist mission” in 1907.
        </p><p>
          Mt. Olive’s founders were emigrants from Ontario, Canada, the adult children of people who had self-emancipated and fled the United States. Both Howard and Lyons had been educated in churches and schools organized by their parents’ generation in the Black settlements across the Detroit River. Both returned to the United States as young adults following 1863, and both were in mid-life and had suffered the loss of parents, spouses, and children by the time they began organizing the meetings. They were assisted by Rev. Robert Gillard, the State Missionary of the Michigan Baptist Convention, and Rev. Clarence E. Lapp, the recently arrived minister of the First Baptist Church of Flint (later known as Woodside and now the People’s Church).
        </p><p>
          The spirit-filled people who began Mt. Olive lived and died here and are buried in our surrounding cemeteries. Their parents had built the first free Black communities and their descendants have continued their community-building work here and in American cities across the urban north. Some of their stories are told here.
        </p>
      </section>

      <section className="history-section">
        <h2>The Birth of the Southside</h2>
        <p>
          The overall population of Flint was just under 40,000 when Mt. Olive was founded, of which the Black community comprised less than 500. The Southside neighborhood was emerging as a center of Black life in the growing city. The Indianapolis Freeman, a prominent Black newspaper with a national readership, described the neighborhood in 1908 as “near Thread Lake Park, and intersected by a finely equipped electric railway and numerous and shady streets” in which lived “a community of upwards of 400 of Flint’s colored citizens. Owning their own homes nearly to a man.” The residents of the Southside are noted for their “industriousness and sobriety” and as being “progressive mechanics, who have contributed to the construction of many of the homes and factories of Flint.” The homes of the Southside are described as “well-built” and situated in “clean, well-kept surroundings.” Prospective residents might imagine themselves enjoying a church society, a burial association, and a pleasant life in a beautiful city. 
        </p>
      </section>

      <section className="history-section">
        <h2>The Origins of Mt. Olive</h2>
        <p>
          Both Mt. Olive and The People’s Church of Flint are members of the American Baptist Churches of the United States of America (ABCUSA). The ABCUSA emerged the same year as Mt. Olive did, 1907, as the Northern Baptist Convention. The NBC descends from the Triennial Convention, organized in 1814 to advance missionary work at home and abroad. Slaveholders could not serve as missionaries under the Triennial Convention, prompting the secession of the Southern Baptist Convention churches in 1845. The churches that remained after the secession of the Southern Baptist Convention became overtly abolitionist in their work which, in Michigan, was exemplified by Detroit’s Second Baptist Church’s illegal support for refugees from slavery.
      </p>
        <div className="history-image-row">
          <figure className="history-image-block">
            <img src={history1} alt="Historic scene 1" onClick={() => openModal(history1)}
              className="clickable-image" />
            <figcaption>Barbershop, Essex County, c.1900. Alvin D. McCurdy Fonds, Archives of Ontario, Amherstburg. In Archives of Ontario.</figcaption>
          </figure>
          <figure className="history-image-block">
            <img src={history2} alt="Historic scene 2" onClick={() => openModal(history2)}
              className="clickable-image" />
            <figcaption>Main Street, Amherstburg, 1865, the settlement where William Lyons was born.
              Alvin D. McCurdy Fonds, Archives of Ontario, Amherstburg. In Archives of Ontario. https://www.archives.gov.on.ca/en/explore/online/ alvin_mccurdy/big/big_05_main_street.aspx</figcaption>
          </figure>
        </div>
      <p>
          After 1834, when slavery was abolished throughout the British Empire, refugees from American slavery and legalized racism fled across the Detroit River into Canada, many on the “Underground Railroad,” many supported by members of Triennial Convention Baptist churches. Once safely across the river, refugees joined or created small rural agricultural Black settlements in Ontario. Some of those settlements were just across the river in places such as Windsor, Amherstbrug, Sandwich, Colchester, New Canaan, Gosfield, and Mt. Pleasant. Otters were slightly further in at Puce, Buxton, Chatham, Shrewsbury, Dresden, and London. These were not the first Black settlers in Ontario; land grants had been given to Black soldiers who fought for the British in the American Revolutionary War. Some Black settlements had been in place for decades. After the Fugitive Slave Act of 1850 when it became legal for slavers to send slave catchers into the Northern states to kidnap self-emancipated people, thousands in the North fled across the Detroit River and joined those Ontario settlements. By the time slavery was abolished in the US, as many as 50,000 Black people were living between Windsor and Toronto. Most of Mt. Olive's founders, earliest leaders, and members were among them.
        </p>
        <p>
          Church-building seems to have been synonymous with community-building in the settlements. Residents and missionaries developed AME and Baptist churches and Sunday schools in even the smallest settlements. The history of the Amherstburg Regular Missionary Baptist Association describes the emergence of those churches:
        </p>
        <p>
          <em>
        “Wherever two or three families settled, they assembled themselves together to give praise to their God, who had delivered them from the bonds of slavery, and to beseech Him to grant that all of their people might yet be freed…small groups met for worship on the Sabbath in homes or in schools…In many such groups the men would band themselves together and hew logs from the forest to make for their group a house of worship.” (2)
          </em>
          </p>
        <p>

          These small churches welcomed newcomers and supported the spiritual, material, and educational needs of residents.

          From as early as 1842 the development of Sunday schools was declared essential “for the benefit of the rising generation and for the edification of its members.” By the time the founders of Mt. Olive were born, their parents had developed Baptist churches and Sunday schools throughout Ontario, organized into two separate Baptist Associations (which eventually unified), and developed schools for Black children (not permitted access to the village schools).

        </p>
        <div className="history-image-row">
          <figure className="history-image-block">
            <img src={history3} alt="Community photo 3" onClick={() => openModal(history3)}
              className="clickable-image" />
            <figcaption>Baptist Sunday School group in Amherstburg, Ontario, [ca. 1910], Alvin D. McCurdy fonds, Archives of Ontario</figcaption>
          </figure>
          <figure className="history-image-block">
            <img src={history4} alt="Community photo 4" onClick={() => openModal(history4)}
              className="clickable-image" />
            <figcaption>“Students of King Street School in Amherstburg, Ontario with Their Teacher, J. H. Alexander. c. 1890s.” Alvin D. McCurdy Fonds, Archives of Ontario, Amherstburg.</figcaption>
          </figure>
          <figure className="history-image-block">
            <img src={history5} alt="Community photo 5" onClick={() => openModal(history5)}
              className="clickable-image" />
            <figcaption>“Amherstburg Regular Baptist Association Convention,” Alvin D. McCurdy Fonds, Archives of Ontario</figcaption>
          </figure>
        </div>

        <p>
          This headstone north of the town of Kingsville, Ontario recognizes the burial of Black settlers from the Gosfield settlement. Mt. Olive founders William Lyons and his wife Margaret Ryers were from this settlement which was also called Salem or Ryers Corners (after Margaret’s family). The settlement’s only public building appears to have been Shiloh Baptist Church, a small log building which likely served as a school for Black children. Shiloh Baptist had 29 members in 1862. The names of a number of Mt. Olive’s earliest families, such as Greer, Jackson, Jenkins, Jones, Johnson, Lyons, Owens, Ryers, and Saunders appear as families with members buried in the Gosfield Black cemetery. This gravestone marks the site of the settlement graveyard; Shiloh Baptist church closed in the early 20th century and the settlement itself was abandoned shortly afterwards.

          The Gosfield settlement was always very small, just a handful of families, but the Chatham-Kent settlement, Sarah Howard’s hometown, was one of the largest. It was an early settlement, beginning in the 1780s along McGregor's Creek, then known as "The Forks," but by 1850 Black settlers comprised one third of Chatham’s population and had built multiple Black churches, schools, and businesses.
          </p>
        <div className="history-image-row">
          <figure className="history-image-block">
            <img src={history6} alt="Headstone at Gosfield cemetery" onClick={() => openModal(history6)}
              className="clickable-image" />
            <figcaption></figcaption>
          </figure>
        <figure className="history-image-block">
            <img src={history7} alt="First Baptist Church of Chatham" onClick={() => openModal(history7)}
              className="clickable-image" />
            <figcaption>First Baptist Church, Chatham, Ontario. Source: Pathfinders of Liberty and Truth: A Century with the Amherstburg Regular Missionary Baptist Association, 1940.</figcaption>
        </figure>
          </div>
          <p>
          The First Baptist Church in Chatham began with just nine members in 1843 and congregants built their first building in 1851. 
          In 1856 the three Black Baptist churches in Chatham–First Baptist, Second Baptist and Union Baptist–unified into the First Baptist Congregation of Chatham. The abolitionist John Brown planned his raid on Harpers Ferry in that church in 1858. Although the Black population of Chatham is now very small, First Baptist continues to meet in the same King Street location; its neighborhood remains a significant historical site for Black Canadian history; and The Black Mecca Museum that celebrates Chatham’s Black community lies next door. (This museum and neighborhood is one of several historical sites commemorating Ontario’s Black settlement history.)

          In those settlements and in their churches emerged a strong sense of free Black identity, culture, and mission. After escaping from slavery, their founders nurtured and educated a generation of leaders who would return to Michigan after the War for Black Freedom and take up the work of Black community-building. In 1861 there had been over 1000 members of the Regular Baptist Association in the settlements, and by 1887 that number had dwindled to 368 as young people and entire families moved back into the United States. What their parents had accomplished in the Ontario settlements, the children would do across MIchigan. Baptist men and women from settlements in Ontario developed Baptist churches in Grand Rapids, Kalamazoo, Lansing, Flint, Ypsilanti, Jackson, Adrian, and Ann Arbor. Many of Mt. Olive’s early members came across into Michigan as young adults and built the Southside Black neighborhood in Flint while Billy Durant was still making horse-drawn carriages. The Baptist churches in the settlements always had significant relationships with Baptist churches in Michigan which continued for decades after Emancipation, in part because families lived on both sides of the border.

          </p>
      </section>

      <section className="history-section">
        <p>
          The spirit-filled people who began Mt. Olive lived and died here in Flint and many are buried in the surrounding cemeteries. Their descendants continued their work here and in American cities across the urban north. Some of those earliest recorded members include:
        </p>
        <ul className="history-list">
          <li>Bethune, H.</li>
          <li>George, John and Jessie  (laborer, 1708 Pine)</li>
          <li>Howard, Sarah and her daughter Neta  (janitor, 507 9th St.)</li>
          <li>Hyde, Emily  (retired, 312 11th St., was a member during 1921, the last year of her life, when she was living with her daughter Anna Wapliss)</li>
          <li>Jenkins, Margaret (widow, 1528 Harrison)</li>
          <li>Johnson, Harry and Bessie (1109 Root)</li>
          <li>Johnson, James Henry, wife, and son Fred (1517 E. 9th St.)</li>
          <li>Joiner, Fred and Elizabeth (coachman, 1110 Root)</li>
          <li>Joiner, Mrs. L.</li>
          <li>Jones, Lorenzo and Edna (Lyons) (laborer, Hurley Hospital, 310 13th St.)</li>
          <li>Kelly, Shadrack and Naomi (helper at Cummings Brothers, 601 E. 11th St.)</li>
          <li>Lawrence, Arther (laborer, 1424 Liberty)</li>
          <li>Lyons, WIlliam, Margaret, and their daughter Edna (later Jones), (laborer and minister, 1608 Pine)</li>
          <li>Mahalay, Henry and Isabelle</li>
          <li>Martin/Mortin, George W. (laborer, 1501/2 Harrison St.)  moved to Flint in the 1870s</li>
          <li>Martin, Henry O. and Ellen C (laborer, 121 E. 12th St.)</li>
          <li>McClellan, Richard, Carrie, and Zera (janitor, 1510 Harrison St.)</li>
          <li>Morgan, Hattie</li>
          <li>Owens, Gladys</li>
          <li>Saunders, H</li>
        </ul>
      </section>
    </div>
  );
}