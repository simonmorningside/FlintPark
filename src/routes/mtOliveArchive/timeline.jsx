import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import ReactModal from 'react-modal';
import { useEffect, useState } from 'react';
import '../mtOliveArchive/timeline-page.css';

export default function Timeline() {
  const [loading, setLoading] = useState(true);
  const [pastors, setPastors] = useState({ images: [], videos: [] });
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedElement, setSelectedElement] = useState(null);

  useEffect(() => {
    const fetchPastors = async () => {
      try {
        const response = await fetch('https://floral-park-webserver-861401374674.us-central1.run.app/api/pastors');
        if (!response.ok) {
          throw new Error('Failed to fetch media data');
        }
        const data = await response.json();
        setPastors(data);
      } catch (error) {
        console.error('Error fetching media:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPastors();
    ReactModal.setAppElement('body');
  }, []);

  const openModal = (element) => {
    setSelectedElement(element);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedElement(null);
  };

  if (loading) return <div>Loading...</div>;

  const renderElement = (id, date, title, content) => (
    <div id={id} key={id}>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date={date}
        iconStyle={{ background: '#7C2529', color: '#fff' }}
      >
        <div onClick={() => openModal({ title, date, content })} style={{ cursor: 'pointer' }}>
          <h3 className="vertical-timeline-element-title">{title}</h3>
          <p>{content[0]}</p>
        </div>
      </VerticalTimelineElement>
    </div>
  );

  const timelineData = [
    {
      id: 'jevon',
      date: '2019-Present',
      title: 'Rev. Jevon Quintrell Catlett',
      content: [
        'Rev. Jevon Quintrell Catlett (1989- ), was born and raised in Hopkinsville, Kentucky. He was called to preach at the age of 13. He joined the St. Bethlehem Baptist Church, under the leadership of Pastor Roland Butler, Jr., where he preached his first sermon.',
        'Rev. Catlett was educated at Lane College, Jackson, Tennessee and United Theological Seminary in Dayton, Ohio. He became a licensed minister in 2003 and was ordained in 2009. Prior to accepting the call to Mt. Olive in September of 2018, Rev. Catlett served at Mt. Ararat Missionary Baptist Church in Birmingham, Alabama and Greater Hope Baptist Church in Murray, Kentucky.',
        '“God has indeed proved himself again. I am most thankful for what God has already done in the life of Mt. Olive. This church has an amazing history and has had great leaders in the past. I am happy, excited and grateful to join Mt. Olive as pastor to lead, learn and grow with them as well as within the community,” said Rev. Catlett regarding his installation.',
        'He and wife Symone (Mays) have three children: Jayce, Jaelyn, and Jrue.'
      ]
    },
    {
      id: 'ronald',
      date: '2017',
      title: 'Rev. Ronald Wilson, interim',
      content: [
        'Rev Wilson served as Associate Pastor under Rev. Greer and served as interim minister in 2017.'
      ]
    },
    {
      id: 'stewart',
      date: '2010-2016',
      title: 'Rev. Dr. Major Adam Stewart',
      content: [
        'Rev. Stewart (1960- ) is from Muskegon Heights, Michigan and was called to serve as pastor of Mt. Olive in 2009. He began his pastorate in March 2010.',
        'Rev Stewart is a graduate of Eastern Michigan University and holds a doctorate in theology from United Theological Seminary in Dayton, OH. He and his wife Carla Brooks Stewart raised three daughters: Alexandria Janine, Mikaela Ann, and Karissa Danielle.',
        'During his ministry, the church produced the video history, This Far by Faith, in honor of its 100th anniversary. Rev. Stewart worked to make Mt. Olive debt free, burning the mortgage for the Family Life Center in front of the congregation in June 2014.',
        'He acquired three properties adjacent to the church and extended youth ministries and programming. He has since served as a pastor of The Greater Mt. Sinai Baptist Church in Charlotte, NC.'
      ]
    },
    {
      id: 'roosevelt',
      date: '2009',
      title: 'Rev. Roosevelt Austin, interim',
      content: [
        'Rev. Austin (August 17, 1926 - June 11, 2020), Pastor Emeritus of Zion Missionary Baptist Church in Saginaw, MI, served as interim minister at Mt. Olive in 2009 as the church sought a pastor to succeed their longest serving minister.'
      ]
    },
    {
      id: 'roy',
      date: '1972-2008',
      title: 'Rev. Dr. Roy Ivory Greer Jr.',
      content: [
        'Rev. Roy Greer (1935-2008) was born in Henderson, Texas. He began ministry work at the age of 12 doing revivals across the country, with his 12 year old uncle, Bishop T.T. Terry. They were affectionately known as the twin preachers.',
        'He was educated at the Southern Bible Institute in Dallas, TX; John Wesley College in Owosso, MI; Grand Rapids Baptist College and Seminary; and Calvary Christian Seminary. Rev. Greer and his wife Lois Dean Morgan Greer had six children. Lois Dean Greer died in 2006; and Rev. Greer married Brenda J. Duckett in 2007.',
        'Before coming to Mt. Olive in 1972, Rev. Dr. Greer was a pastor at New Mount Moriah Baptist Church in Dallas, TX and the First Baptist Church of Sheffield, AL.',
        'Rev. Greer’s vision led to several administrative updates, renovations, and youth programs including the Family Life Center in 1999. He was known for his humor, mentorship, and dynamic preaching style.'
      ]
    },
    {
      id: 'robert',
      date: '1939-1972',
      title: 'Rev. Robert Roscoe Turpin',
      content: [
        'Rev. Robert R. Turpin (1886 - 1986) came to Mt. Olive in 1939. Educated at Morehouse College, Colgate Rochester Divinity School, and Cornell University, he previously served in New York and was a community leader.',
        'He and his wife Annie Turpin were deeply involved in both church and civic life. Under his leadership, Mt. Olive quadrupled its membership and built a new church at 424 E. Kennelworth.',
        'Rev. Turpin also advocated for civil rights and stronger Black representation in public service in Flint.'
      ]
    },
    {
      id: 'edgar',
      date: '1937-1939',
      title: 'Rev. Edgar James Timmons',
      content: [
        'Rev. Edgar James Timmons was born in 1890 in South Carolina. He studied at Moody Bible Institute and Oberlin College. Timmons worked as an autoworker before serving as acting pastor at Mt. Olive.',
        'He later served as minister at Metropolitan Baptist Tabernacle and was involved in civic and political life in Flint.'
      ]
    },
    {
      id: 'junius',
      date: '1934-1937',
      title: 'Rev. Junius H. Thomas',
      content: [
        'Rev. Junius Thomas served from 1934 to early 1937. Originally from Alabama, he had pastored in several southern states before coming to Flint. He was also the pastor of New Hope Baptist.'
      ]
    },
    {
      id: 'paschall',
      date: '1932-1933',
      title: 'Rev. Paschall Lee Sanders / Saunders',
      content: [
        'Rev. Paschall Sanders came from Louisiana and served Mt. Olive after ministering in Texas. He lived with his family in Flint during his time at Mt. Olive and later moved to Madison, Wisconsin.'
      ]
    },
    {
      id: 'winston',
      date: '1931-1932',
      title: 'Rev. W.S. Winston, visiting',
      content: [
        'No information is available regarding Rev. W.S. Winston.'
      ]
    },
    {
      id: 'elbert',
      date: '1931-1932',
      title: 'Rev. Elbert L. Todd',
      content: [
        'Rev. Elbert L. Todd (1879-1960) served as the pastor of Mt. Olive for some of 1931 and 1932. Born in Mississippi, he had been a farmer before becoming a minister.',
        'He was the full-time minister of Second Baptist Church in Battle Creek while also serving Mt. Olive. He later led Mt. Zion Baptist in Ecorse, Michigan, and served as president of the Wolverine State Baptist Convention for 25 years.'
      ]
    },
    {
      id: 'pugh',
      date: '1930',
      title: 'Rev. C.A. Pugh, visiting',
      content: [
        'Rev. Pugh served during the Fall of 1930. No additional information is known about him.'
      ]
    },
    {
      id: 'louis',
      date: '1928-1930',
      title: 'Rev. Louis Robert Webster Johnson',
      content: [
        'Rev. L.R.W. Johnson came to Flint in 1928. His wife and children remained in Virginia while he worked at Mt. Olive.',
        'After a congregational dispute and a legal injunction, he eventually left and became the pastor of New Hope Baptist Church. He died in Nashville in 1935.'
      ]
    },
    {
      id: 'william',
      date: '1928',
      title: 'William M. Epps, interim',
      content: [
        'Rev. William Epps preached at Mt. Olive for a few months in the Fall of 1928. He was a laborer and auto worker who lived at 510 Kennelworth with his wife Mildred.'
      ]
    },
    {
      id: 'wade',
      date: '1923-1929',
      title: 'Rev. Wade Hampton McKinney',
      content: [
        'Rev. McKinney (1892-1963) was born in Georgia, educated at Morehouse College and Colgate Rochester Seminary, and served in WWI. He led Mt. Olive through major growth.',
        'He established numerous church organizations and supported the creation of Shiloh Baptist Church. He later moved to Cleveland, Ohio, where he continued pastoral and civil rights work.'
      ]
    },
    {
      id: 'joseph',
      date: '1917-1923',
      title: 'Rev. Joseph Caldwell Nicholas',
      content: [
        'Rev. Nicholas served Mt. Olive from 1917 to 1923. Further details about his tenure remain limited in available records.'
      ]
    },
    {
      id: 'bolen',
      date: 'Unknown',
      title: 'Rev. Bolen',
      content: [
        'No information has been found about Rev. Bolen, or what year/years he was associated with Mt. Olive.'
      ]
    },
    {
      id: 'herbert',
      date: '1914-1918',
      title: 'Rev. Herbert Leslie Dungy',
      content: [
        'Rev. Dungy (1893/4–1976) came from Ontario and served Mt. Olive in his early 20s. Under his leadership, church membership grew steadily.',
        'He later moved to Jackson, Michigan and eventually left ministry work but remained in Jackson until his death.'
      ]
    },
    {
      id: 'david',
      date: '1912-1914',
      title: 'Rev. David C. Adams',
      content: [
        'Rev. Adams was called to serve Mt. Olive in 1912 when services were still held in Sarah Howard’s home. He preached and led revival meetings through 1914.'
      ]
    },
    {
      id: 'daniel',
      date: '1910',
      title: 'Rev. Daniel L. Jackson',
      content: [
        'Rev. Jackson came from Toledo to become Mt. Olive’s first official minister. He served briefly and returned to Toledo shortly after.',
        'During his time, the church was referred to as Mt. Olive Mission and held services in a home on 9th St. This period laid the foundation for the congregation’s future.'
      ]
    },
    {
      id: 'winston',
      date: '1931-1932',
      title: 'Rev. W.S. Winston, visiting',
      content: [
        'No information is available regarding Rev. W.S. Winston.'
      ]
    },
    {
      id: 'elbert',
      date: '1931-1932',
      title: 'Rev. Elbert L. Todd',
      content: [
        'Rev. Elbert L. Todd (1879-1960) served as the pastor of Mt. Olive for some of 1931 and 1932. Born in Mississippi, he had been a farmer before becoming a minister.',
        'He was the full-time minister of Second Baptist Church in Battle Creek while also serving Mt. Olive. He later led Mt. Zion Baptist in Ecorse, Michigan, and served as president of the Wolverine State Baptist Convention for 25 years.'
      ]
    },
    {
      id: 'pugh',
      date: '1930',
      title: 'Rev. C.A. Pugh, visiting',
      content: [
        'Rev. Pugh served during the Fall of 1930. No additional information is known about him.'
      ]
    },
    {
      id: 'louis',
      date: '1928-1930',
      title: 'Rev. Louis Robert Webster Johnson',
      content: [
        'Rev. L.R.W. Johnson came to Flint in 1928. His wife and children remained in Virginia while he worked at Mt. Olive.',
        'After a congregational dispute and a legal injunction, he eventually left and became the pastor of New Hope Baptist Church. He died in Nashville in 1935.'
      ]
    },
    {
      id: 'william',
      date: '1928',
      title: 'William M. Epps, interim',
      content: [
        'Rev. William Epps preached at Mt. Olive for a few months in the Fall of 1928. He was a laborer and auto worker who lived at 510 Kennelworth with his wife Mildred.'
      ]
    },
    {
      id: 'wade',
      date: '1923-1929',
      title: 'Rev. Wade Hampton McKinney',
      content: [
        'Rev. McKinney (1892-1963) was born in Georgia, educated at Morehouse College and Colgate Rochester Seminary, and served in WWI. He led Mt. Olive through major growth.',
        'He established numerous church organizations and supported the creation of Shiloh Baptist Church. He later moved to Cleveland, Ohio, where he continued pastoral and civil rights work.'
      ]
    },
    {
      id: 'joseph',
      date: '1917-1923',
      title: 'Rev. Joseph Caldwell Nicholas',
      content: [
        'Rev. Nicholas served Mt. Olive from 1917 to 1923. Further details about his tenure remain limited in available records.'
      ]
    },
    {
      id: 'bolen',
      date: 'Unknown',
      title: 'Rev. Bolen',
      content: [
        'No information has been found about Rev. Bolen, or what year/years he was associated with Mt. Olive.'
      ]
    },
    {
      id: 'herbert',
      date: '1914-1918',
      title: 'Rev. Herbert Leslie Dungy',
      content: [
        'Rev. Dungy (1893/4–1976) came from Ontario and served Mt. Olive in his early 20s. Under his leadership, church membership grew steadily.',
        'He later moved to Jackson, Michigan and eventually left ministry work but remained in Jackson until his death.'
      ]
    },
    {
      id: 'david',
      date: '1912-1914',
      title: 'Rev. David C. Adams',
      content: [
        'Rev. Adams was called to serve Mt. Olive in 1912 when services were still held in Sarah Howard’s home. He preached and led revival meetings through 1914.'
      ]
    },
    {
      id: 'daniel',
      date: '1910',
      title: 'Rev. Daniel L. Jackson',
      content: [
        'Rev. Jackson came from Toledo to become Mt. Olive’s first official minister. He served briefly and returned to Toledo shortly after.',
        'During his time, the church was referred to as Mt. Olive Mission and held services in a home on 9th St. This period laid the foundation for the congregation’s future.'
      ]
    }
  ];



  return (
    <div className="timeline-wrapper">
      <VerticalTimeline>
        {timelineData.map(entry => renderElement(entry.id, entry.date, entry.title, entry.content))}
      </VerticalTimeline>

      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Pastor Details Modal"
        style={{
          overlay: { backgroundColor: 'rgba(0, 0, 0, 0.7)' },
          content: {
            maxWidth: '700px',
            margin: 'auto',
            padding: '2rem',
            borderRadius: '1rem',
            inset: '10% auto auto auto',
            backgroundColor: '#fff',
            color: '#000'
          }
        }}
      >
        {selectedElement && (
          <div>
            <h2>{selectedElement.title}</h2>
            <h4>{selectedElement.date}</h4>
            {selectedElement.content.map((para, index) => (
              <p key={index}>{para}</p>
            ))}
            <button onClick={closeModal}>Close</button>
          </div>
        )}
      </ReactModal>
    </div>
  );
}
