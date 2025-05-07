import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from "lucide-react";
import '../../styles/index.css';
import '../../fillerstylepageuntilwearesorted.css';
import '../mtOliveArchive/mtOliveArchive.css';
import '../../mtolivearchive.css';

export default function Churches() {
  const [loading, setLoading] = useState(true);
  const [media, setMedia] = useState({ images: [], videos: [] });
  const [pastors, setPastors] = useState({ images: [], videos: [] });
  const [startIndex, setStartIndex] = useState(0);
  const imagesPerPage = 3;
  const selectedImageIndices = [32, 35, 36, 7, 40, 13, 17, 9, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5];
  const [selectedFounderIndex, setSelectedFounderIndex] = useState(null);
  const [selectedBuildingIndex, setSelectedBuildingIndex] = useState(null);
  const [selectedParsonageIndex, setSelectedParsonageIndex] = useState(null);

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const response = await fetch('https://floral-park-webserver-861401374674.us-central1.run.app/api/churches');
        if (!response.ok) throw new Error('Failed to fetch media data');
        const data = await response.json();
        setMedia(data);
      } catch (error) {
        console.error('Error fetching media:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchMedia();
  }, []);

  useEffect(() => {
    const fetchPastors = async () => {
      try {
        const response = await fetch('https://floral-park-webserver-861401374674.us-central1.run.app/api/pastors');
        if (!response.ok) throw new Error('Failed to fetch media data');
        const data = await response.json();
        setPastors({ images: selectedImageIndices.map(index => data.images[index]).filter(Boolean) });
      } catch (error) {
        console.error('Error fetching media:', error);
      }
    };
    fetchPastors();
  }, []);

  const handleNext = () => {
    if (startIndex + imagesPerPage < pastors.images.length) {
      setStartIndex(startIndex + imagesPerPage);
    }
  };

  const handlePrev = () => {
    if (startIndex - imagesPerPage >= 0) {
      setStartIndex(startIndex - imagesPerPage);
    }
  };

  if (loading) return <div>Loading...</div>;

    const founderInfo = [
    {
      title: "Mrs. Sarah F. (Jackson) Howard",
      description:
        "Mrs. Sarah F. (Jackson) Howard (1856/8–1927) came to Flint in her early 20s from the Black settlement in Chatham, Ontario. She had gone to school in Chatham—an opportunity that had not been permitted to her mother, Moriah Jackson, who had fled slavery in Kentucky. In Flint, Sarah married Charles A. Howard, also of Ontario, in 1883, and they had a number of children. In 1886 and 1897, Sarah Howard purchased two lots on 9th Street, 507 and 509, with an empty lot between them. In 1911, she purchased the lot in between. In the first decade of the 20th century, Sarah Howard regularly hosted gatherings of neighbors and visiting ministers working to organize a Black Baptist mission on the Southside. One such minister was evangelist T. H. Morris from Detroit. By this time, Sarah Howard was a widow in her 50s with one surviving child, her daughter, Neta. The Mt. Olive community—as a collection of neighbors, a mission, and eventually a church—met at her home on 9th Street for most of a decade before a designated church building was acquired. Mrs. Sarah Howard lived at 507 and 509 E. 9th Street for 40 years until she died of thyroid cancer in 1927. She is buried at River Rest Cemetery."
    },
    {
      title: "Rev. William Isaac Lyons",
      description:
        "William Isaac Lyons (1842–1911), an elder newly arrived from the Lansing area, preached in Flint’s Black Baptist community during the first five years of its existence. He was never the pastor of an organized church in Flint, but he realized the importance of a Baptist church to Black life and worked together with his neighbors and with First Baptist Church to organize a community that would, after his death, become Mt. Olive Missionary Baptist Church. Lyons had come to Flint in the 1890s in his early fifties with his third wife, Margaret Ryers Lyons. He had been born in 1842 or 1843 in Ontario, just across the Detroit River in Amherstburg or Malden Township, and had come across into Michigan in the 1860s. He and his first wife, Mahala Lang (1846–1879), made their home in rural Mason, Michigan, just south of Lansing. They raised a large family there, while he worked as a laborer and as a preacher in both AME and Baptist groups in and around Lansing. After Mahala’s death, Lyons married twice again, and when he moved to Flint, his adult children (and at least one of his brothers) remained in Mason. His brother, A. M. Lyons, and his sister, Helen Scoville, also moved to Flint. William Lyons’ parents, James and Moriah, had fled Kentucky and Virginia, respectively, and arrived in what was then called Upper Canada, still a British colony. They lived in the settlement in Gosfield South, now called Kingsville. It was a small settlement, but William was able to learn to read and write there in the late 1840s, while his older brothers had not. By the time he was 20, he had lost his father and was soon to reverse his parents’ migration and move to the United States, where slavery had been recently outlawed. His work as an AME and Baptist minister was called “traditional” in that the services he led were described as being of the “old time order with much singing and praying.” He became a member of the Free and Accepted Masons “colored lodge” of Lansing and the Knights of Pythias. Lyons lived and worked in Mason, Lansing, and Flint, but maintained strong ties to the Ontario settlements where he had been born. He was known to return to Kingsville to preach. Margaret Ryers, the wife with whom he moved to Flint, had been a neighbor in Gosfield and part of the Ryers family for whom the Black settlement was named. In 1896, decades after his emigration into Michigan, Lyons organized a celebration to commemorate Canadian Emancipation Day in Lansing and invited government officials to recognize the important connection between Michigan’s Black communities and Canadian history. By 1899, William Lyons had moved to Flint and was working as a laborer and a leader at the established AME and the emerging Baptist communities. In 1906, he was living on Lyon Street and preaching in the AME church when the regular pastor was absent. In 1909, he assisted the AME minister in a special week of services. By April of 1911, “Elder William Lyons” and Margaret lived at 1608 Pine Street, a property very near the locations of all three future Mt. Olive properties, and which would be occupied by a number of future Mt. Olive ministers. In 1911, the Flint Journal reported that Lyons was to speak at “Mt. Olive” in the home of Sarah Howard at 507 9th Street. He and Margaret had two daughters in Flint: Edna Lyons Jones (1890–1977) and Lena Lyons (1893–1905). As the Mt. Olive community was organizing a church of their own, the AME church served the family’s formal needs. They held the funeral for their daughter Lena at Quinn Chapel. William Lyons died of diabetes on May 4, 1911, at the age of 68 and is buried at the Old Flint Cemetery. His obituary describes him as one of the best-known “colored” men in the city of Flint and as a man who preached at the “colored Baptist mission on East 9th Street.” He did not have his own church in Flint, his obituary reports, but was engaged in the work of founding one. At the time of his death, his brothers and children were living in Mason, Cleveland, Flint, Lansing, and Windsor. His wife, Margaret, continued to live at 1608 Pine Street and took in boarders who were factory workers, domestics, or clergymen. She would marry Lee Martin from North Carolina in 1924 in Flint. She remained a member of Mt. Olive mission and church until her death in 1954. She is buried at River Rest."
    },
      {
        title: "Rev. Robert Gillard",
        description:
          "Like Rev. William Lyons, Rev. Robert Gillard (c.1845-1914), was a traveling missionary who worked to build Black Baptist churches throughout the region. He held the position of state Missionary of the Chain Lake Baptist Association and of the Michigan Baptist Convention. He had worked throughout the region in the 1880s and 1890s including Kalamazoo, Adrian, at Messiah Baptist in Grand Rapids, Jackson, Flint, South Bend, Indiana and he also preached in Fletcher, Ontario. At the time he was helping organize Mt. Olive, he was living in Ann Arbor. When he visited Flint, he met with the members of the Southside “colored Baptist mission” in the Howard or Lyons home and helped them to organize a mission, a Sunday school, and eventually a church. Gillard worked with Rev. Lapp, pastor of the first Baptist Church in Flint, and Mrs. Celinda Severance of the North Baptist Church, to develop a Sunday School. In 1909 the Flint Journal announced that the formal organization meetings would begin for the “Southside Mission Sunday School.” Mr. and Mrs. Severance were the first teachers. This work took time and persistence. In 1909 and 1910, meetings were still being held in a number of homes including that of Henry and Isabelle Mahalay, who lived at the corner of 13th and Harrison streets to “organize a colored baptist mission in the Southside and a Sunday school.” Rev. Gillard is reported to have attended several of these meetings. In February 1910 the Flint Journal announced that “Elder Gillard, of Ann Arbor, state missionary” was in Flint to meet all of the “workers and friends of the colored Baptist mission” at the home of WIlliam Lyons on Pine St. The following month, the Journal announced that the Southside Baptist mission had been reorganized into a new African church to be called “Mt. Olive Baptist Church” and that Rev. D.L. Jackson of Toledo had been invited to serve as its first official minister. "
      }
  ];

  const buildingInfo = [
    {
      title: "420 Center/Ward/12th St.", description: "The Mt. Olive Baptist Church Society purchased a piece of land from members James and Julia Johnson on a land contract for $130 that spanned March 29, 1910 to May 1, 1911. This property was on Center St., a location that would become 420 Ward St. They built a small wooden church building there, shown in this 1915 Sanborn map. The members were meeting at 420 Ward by late 1913. That building was damaged by a wind storm in 1915 and the group decided that rather than rebuild, it was time to move to a larger and more substantial building. Ward St. ran East/West between Pine and Liberty just south of 12th and was later straightened to become an extension of 12th. This property was very close to the site of the current church." },
    {
      title: "1601-3 Pine/Clifford St.", description: "In 1915, Mt. Olive purchased the Arbeiter Dance Hall at 1601 Pine St. (later Clifford St.) from the German Arbeiter Society (by way of the Elm Park Land Company) for an $8000 land contract (which may have included the use of their property at 420 Ward as a down payment). The site was listed for sale for $2500, but the need to purchase it on contract cost the church members more than triple the listed price. This building was dedicated on Sept 26, 1915. The building contained a large open auditorium space and a basement suitable for activities and is remembered by some senior members of Mt. Olive as “the old church.” The Arbeiter Society was a German-American Social club and support society that held meetings and social events in halls such as the one at the corner of Pine and 11th. (This organization owned a very similar hall in the Black Bottom of Detroit which they sold in 1916 claiming that that neighborhood was becoming increasingly African-American.) In 1920, Mt. Olive purchased the adjacent property at 1603 Clifford on contract from Leland and Garnett Wood. Mt. Olive would occupy this building until June 1950. In early 1955, a Black newspaper entitled The North Star was to be published out of 1601 Clifford St. From 1955 - 1957 Quinn Chapel used the building while they were constructing a new church, their building at 121 E. Seventh St. being demolished for the building of the Flint Administration buildings. (The value of Quinn Chapel’s property and buildings were appraised and they were compensated for $40,000. Their new church at Lippincott and McPhail would cost $200,000.)  In March 1957 Quinn Chapel congregants attended service in their new building for the first time and thirteen members of Mt. Olive purchased 1601 Clifford St. and started First Trinity Missionary Baptist Church there. From 1961-1969 the property served as Flint’s Black Muslim Mosque, Masjid Muhammad No 53, formerly known as the Nation of Islam. The Muslim community met at 1601 Clifford St. until it was demolished for the building of I-475; they then moved to a small white building at Buick and Gillespie streets where they operated for at least another decade." },
    {
      title: "424 E. Kennelworth", description: "A property known as “the old Taylor home-site” at the corner of Liberty and Kennelworth was acquired in 1944 for a new and larger church site. A building fund was begun under the leadership of Mrs. T.I. Wheeler and Mrs. Mark Hammond. Mt. Olive broke ground on their new sanctuary July 23, 1949. A year later, on June 10, 1950, the membership marched from 1601 Clifford St. to dedicate their new building at 424 East Kennelworth. The first unit of the new building contained a sanctuary with two lectionaries and a capacity of 400, a chapel, a pastor’s study, choir rooms, a cloak corridor, lavatories, a furnace room, and two robing rooms for candidates for baptism which could also serve as a sacristy and conference room. The sanctuary was completed Jan 17, 1953 and the cost of the structure, $68,000, was liquidated, with the last $20,000 being raised in two and a half years. The celebration of the completion of the sacristy project was led by Mrs. Evelyn McNeely and Mrs. E.C. Robinson. In September 1956, the members of Mt.Olive broke ground on the Educational Unit, slated to cost $100,000.The 9, 400 square foot new unit would include a large fellowship hall(to be dedicated as Turpin Hall Family Life Center ), a recreation room, 8 classrooms, a kitchen, a parlor, a nursery, a pastor’s study, and work and storage rooms. The architect was Walter Kloske and the contractor R. N Bruce. The expanded building was dedicated on November 24, 1957. The congregation retired the $200,000 mortgage for this building project in December 1959, just a year after completing the project. In 1988-89 under the leadership of Rev.Roy Greer, the sanctuary was expanded by an east wind and a high ceilinged narthex with stained glass windows, restrooms, and a sound booth.The brick exterior was coated with plaster; the air conditioning, carpeting and pews were updated, and an addition was added that housed additional classrooms, pastor’s offices, restrooms, a conference room, dressing rooms, and an elevator. In 1999 the multi- level Family Life Center was built at a price of $1.5 million.The Family Life Center serves as a recreation space and features a regulation - size basketball court, a commercial kitchen, 10 classrooms, and restrooms.That center was declared the Roy I.Greer Family Life Center in 2014." }
  ];

  const parsonageInfo = [
    {
      title: "1520 Park St.", description: "On the next block north of the first parsonage, McKinney’s successor, Rev. Lewis Johnson lived at 1520 Park St. during 1929 and 1930. It is unknown if this house was owned by the church as a parsonage. No other Mt. Olive ministers are listed as living at this address after Rev. Johnson’s time." },
    {
      title: " 1613 Linwood Ave.", description: "This house on Linwood Ave. was purchased as a parsonage for Rev. Greer. After his passing in 2008, his successor Rev. Stewart lived there for some time." },
    { title: "1608 Park St.", description: "During the ministry of Rev. Joseph Nicholas (1917-23), the church purchased 1608 Park St. Nicholas lived there for some time, and in 1928, Rev. Wade McKinney and his wife Ruth lived there. By the 1930s, the house seems to have moved out of the church’s hands." }
  ];

  const pastorNameTags = [
    { name: "Rev. Jevon Quintrell Catlett", id: "jevon" },
    { name: "Rev. Ronald Wilson, interim", id: "ronald" },
    { name: "Rev. Dr. Major Adam Stewart", id: "stewart" },
    { name: "Rev. Roosevelt Austin", id: "roosevelt" },
    { name: "Rev. Dr. Roy Ivory Greer Jr.", id: "roy" },
    { name: "Rev. Robert Roscoe Turpin", id: "robert" },
    { name: "Rev. Edgar James Timmons", id: "edgar" },
    { name: "Rev. Junius H. Thomas", id: "junius" },
    { name: "Rev. Paschall Lee Sanders / Saunders", id: "paschall" },
    { name: "Rev. W.S. Winston, visiting", id: "winston" },
    { name: "Rev. Elbert L. Todd", id: "elbert" },
    { name: "Rev. C.A. Pugh", id: "pugh" },
    { name: "Rev. Louis Robert Webster Johnson", id: "louis" },
    { name: "William M. Epps", id: "william" },
    { name: "Rev. Wade Hampton McKinney", id: "wade" },
    { name: "Rev. Joseph Caldwell Nicholas", id: "joseph" },
    { name: "Rev. Bolen", id: "bolen" },
    { name: "Rev. Herbert Leslie Dungy", id: "herbert" },
    { name: "Rev. David C. Adams", id: "david" },
    { name: "Rev. Daniel L. Jackson", id: "daniel" }
  ];

  return (
    <div className="page-container" style={{ marginTop: '60px', padding: 0 }}>
      <header className="header">
        <div className="header-content">
          <div className="header-logo-container">
            {media.images[10] && <img src={media.images[10].url} alt="Church Logo" className="header-logo" />}
          </div>
          <div className="title-video-container">
            <h1>History of Mount Olive Missionary Baptist Church</h1>
            <section className="header-text">
              <div className="video-header">
                <video controls src={media.videos[0]?.url} className="church-video" />
              </div>
            </section>
          </div>
        </div>
        <div className="green-strip"></div>
      </header>

      <section className="history-section">
        <div className="history-text">
          <p>
            Mt. Olive, the oldest Black Baptist church in Flint, began as a series of organizing meetings in the home of founder Sarah F. Howard at 509 9th St. In those meetings, Howard and founder Rev. William Isaac Lyons (who proposed the name Mt. Olive) organized what the Flint Journal would call the “colored Baptist mission” in 1907. 
          </p>
          <Link to="history/" className="learn-more-link">Learn More...</Link>
        </div>
      </section>

      {['FOUNDERS', 'PASTORS', 'BUILDINGS', 'PARSONAGES', 'ARCHIVE'].map((title, idx) => (
        <section key={title} className={`section-container ${idx % 2 === 0 ? 'bg-ivory' : 'bg-light'}`}>
          <div className="section-inner">
            <h2 className="section-title">{title}</h2>

            {title === 'FOUNDERS' && (
              <div className="founders-info-container">
                <div className="founders-content-row">
                  <div className="founders-images">
                    {[18, 0].map((idx, i) => (
                      media.images[idx] && (
                        <div className="founder-box" key={i}>
                          <img
                            src={media.images[idx].url}
                            alt={`Founder ${i + 1}`}
                            className="founder-photo"
                            onClick={() => setSelectedFounderIndex(i)}
                          />
                          <div className="founder-name-tag">{founderInfo[i].title}</div>
                        </div>
                      )
                    ))}
                  </div>

                  <div className="founder-popup-box">
                    {selectedFounderIndex === null ? (
                      <p className="founder-placeholder">Click on a founder to learn more!</p>
                    ) : (
                      <div>
                          <h4>{founderInfo[selectedFounderIndex].title}</h4>
                          <p>{founderInfo[selectedFounderIndex].description}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {title === 'PASTORS' && (
              <div className="pastors-slideshow-wrapper">
                <button onClick={handlePrev} disabled={startIndex === 0} className="arrow-button left-arrow">
                  <ChevronLeft />
                </button>

                <div
                  className="pastor-slideshow-container"
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: '10px',
                  }}
                >
                  {pastors.images.slice(startIndex, startIndex + imagesPerPage).map((image, i) => {
                    const globalIndex = startIndex + i;
                    const tag = pastorNameTags[globalIndex];
                    return (
                      <div
                        key={i}
                        className="pastor-image-wrapper"
                        style={{
                          flex: '1 1 200px',
                          maxWidth: '250px',
                          textAlign: 'center',
                        }}
                      >
                        <img
                          src={image.url}
                          alt="Pastor"
                          className="pastor-photo"
                          style={{ width: '100%', height: 'auto' }}
                        />
                        {tag ? (
                          <Link to={`/churches/pastors#${tag.id}`} className="pastor-name-tag">
                            {tag.name}
                          </Link>
                        ) : (
                          <div className="pastor-name-tag">Pastor</div>
                        )}
                      </div>
                    );
                  })}
                </div>


                <button
                  onClick={handleNext}
                  disabled={startIndex + imagesPerPage >= pastors.images.length}
                  className="arrow-button right-arrow"
                >
                  <ChevronRight />
                </button>
              </div>
            )}

            {title === 'BUILDINGS' && (
              <div className="building-info-container">
                <div className="image-row">
                  {[12, 3, 7].map((idx, i) => (
                    media.images[idx] && (
                      <div className="image-box" key={i} onClick={() => setSelectedBuildingIndex(i)}>
                        <img src={media.images[idx].url} alt={`Building ${i + 1}`} className="building-photo-custom" />
                        <div className="image-name-tag">{buildingInfo[i].title}</div>
                      </div>
                    )
                  ))}
                </div>
                <div className="info-popup-box centered-popup">
                  {selectedBuildingIndex === null ? (
                    <p className="info-placeholder">Click on a building to see more details.</p>
                  ) : (
                    <div>
                        <h4>{buildingInfo[selectedBuildingIndex].title}</h4>
                        <p>{buildingInfo[selectedBuildingIndex].description}</p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {title === 'PARSONAGES' && (
              <div className="parsonage-info-container">
                <div className="image-row">
                  {[14, 15, 16].map((idx, i) => (
                    media.images[idx] && (
                      <div className="image-box" key={i} onClick={() => setSelectedParsonageIndex(i)}>
                        <img src={media.images[idx].url} alt={`Parsonage ${i + 1}`} className="parsonage-photo-custom" />
                        <div className="image-name-tag">{parsonageInfo[i].title}</div>
                      </div>
                    )
                  ))}
                </div>
                <div className="info-popup-box centered-popup">
                  {selectedParsonageIndex === null ? (
                    <p className="info-placeholder">Click on a parsonage to learn about its history.</p>
                  ) : (
                    <div>
                        <h4>{parsonageInfo[selectedParsonageIndex].title}</h4>
                        <p>{parsonageInfo[selectedParsonageIndex].description}</p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {title === 'ARCHIVE' && (
              <div className="archive-links">
                {[
                  ["Life Events", "Funeral Programs", "Obituaries", "Graduations"],
                  ["Choir Records", "Recordings", "Meetings Minutes"],
                  ["Church Materials", "Bulletins", "Newsletters (The Olive Branch)", "Flyers", "Anniversaries", "Directories"],
                  ["Photographs", "Sunday School", "Events", "Summer Enrichment Program"]
                ].map((group, i) => (
                  <p key={i} className="block-style">
                    <Link to={'archive/'} className="archive-link-styling">{group[0]}</Link><br />
                    {group.slice(1).map((item, j) => <>{item}<br key={j} /></>)}
                  </p>
                ))}
              </div>
            )}
          </div>
        </section>
      ))}
    </div>
  );
}
