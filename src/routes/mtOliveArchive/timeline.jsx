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
        iconStyle={{ background: '#cc5500', color: '#fff' }}
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
        'Rev. Stewart (1960- ) is from Muskegon Heights, Michigan and was called to serve as pastor of Mt. Olive in 2009. He began his pastorate in March 2010. Rev Stewart is a graduate of Eastern Michigan University and holds a doctorate in theology from United Theological Seminary in Dayton, OH.',
        'He and his wife Carla Brooks Stewart raised three daughters: Alexandria Janine, Mikaela Ann, and Karissa Danielle. During his ministry, the church produced the video history, This Far by Faith, in honor of its 100th anniversary. Rev. Stewart worked to make Mt. Olive debt free, burning the mortgage for the Family Life Center in front of the congregation in June 2014. He acquired three properties adjacent to the church and extended youth ministries and programming. He has since served as a pastor of The Greater Mt. Sinai Baptist Church in Charlotte, NC.'
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
        'Before coming to Mt. Olive in 1972, Rev. Dr. Greer was a pastor at New Mount Moriah Baptist Church in Dallas, TX and the First Baptist Church of Sheffield, AL. Rev. Greer was offered a salary of $175 per week and $60 per week as a housing allowance, and the family of eight first moved into a rented 2-bedroom home on Home St. on the Northside. The Greers greatly impacted church life at Mt. Olive. Rev Greer brought a cool youthful energy to the church and a fiery preaching style. Mrs Greer brought a remarkable singing style and an emphasis on a wider range of lively music. Rev. Greer’s vision led to several administrative updates, additions and renovations to both the interior and exterior of the church building, as membership continued to climb. Rev Greer added to the schedule of services and added communion to a morning service as well as the evening. He was known as a sharp dresser, a man with a good sense of humor, and a mentor to young people. His vision for the Family Life Center built in 1999 was that it would serve as a gathering space for the youth in the Flint community. Many of those he mentored went on to become doctors, lawyers, teachers, and ministers.',
        'Rev. Greer enthusiastically oversaw the Mt. Olive centennial celebration in 2007. He was also instrumental in building a church in India and supporting a pastor and church in Haiti. Members fondly recall Rev. Greer’s openness to new musical styles, his tireless pastoral work, and his lively sermons. '
      ]
    },
    {
      id: 'robert',
      date: '1939-1972',
      title: 'Rev. Robert Roscoe Turpin',
      content: [
        'Rev. Robert R. Turpin (May 22, 1886 - January 13, 1986) came to Mt. Olive with his wife Annie and their two sons, Robert and Charles, in the fall of 1939. Turpin had been born in Alabama as one of thirteen siblings; he was the only one to attend college.',
        'He worked cutting hair and as a train porter to put himself through Morehouse College where he met his wife Annie Fisher, a Spellman student and the daughter of C.L. Fisher, dean of Religion at Selma University and pastor of Atlanta’s 16th Street Baptist Church. Rev. Turpin would earn further degrees at Colgate Rochester Divinity School and Cornell University. Before coming to Flint, Rev. Turpin served as minister of Munford Second Baptist Church in Leroy, New York for 13 years and as the Secretary and Moderator of the Genesee Baptist Association. Turpin began his work at Mt. Olive in January and was officially installed in October of 1939. The family lived at 1419 Clifford St. ',
        'The Turpins’ first year at Mt Olive ws a busy one. The Flint Brownsville News reported that in November of 1939 Mt. Olive hosted a Harvest Home Festival featuring “appetizing suppers, interesting programs, valuable prizes and bargain sales.” The following month, that same paper reported that Annie Turpin’s mother, Mrs Fisher, visited her daughter’s family in Flint. Mrs. James Buchanan of 2016 Stanford Ave hosted a social gathering in Mrs Fisher’s honor at which games were played and appetizing refreshments served. That event was attended by Rev. and Mrs. Turpin and their son, Rev. A. Davis of Bethel AME, Rev. Simmons of New Hope Baptist, Rev. and Mrs. E. Timmons (previously of Mt. Olive), Mrs. L. Willis, Mr. A. Wilson, Mrs. W. Reed, Mrs. J Brady, Mrs. F. Johnson, Mr. and Mrs. S. Johnson, Mrs. D.C. Harris, Mrs. N Anderson, Mrs. C. Davis, Mrs. Clements, Mrs. L Wickware, Mr. A. McGee, Mr. and Mrs. H. Lewis, Mr. and Mrs. R. Franklin, Mr. and Mrs. Woods, and Mr. and Mrs. A. Davis. As minister, some of Rev. Turpin’s first priorities were establishing a bookkeeping system to better manage the church’s finances and to formalize a timely schedule for church events.',
        'The Mt. Olive choir in those years was widely regarded as “the most efficient in the city” and offered public recitals. “When the choir puts on a recital it is simply superb,” the paper reports in 1941, and lists Mrs. E.C. Robinson, directoress; Mrs. Thomas Wheeler, president; Mrs. Leonard Hodge, George Grier, Dorothy Greene, and Mrs. Wheeler soloists.',
        'Within his first five years in the position, Turpin had become a recognized leader in the Flint community, urging the city to appoint more Black residents in the human services departments, serving as President of the Progressive Ministers Interdenominational Alliance and as the Vice President of the Flint Council of Churches. In February 1942, the Women’s Society of Christian Service at Lincoln Park Methodist Church in Flint invited Rev. Turpin to serve as the guest speaker at their annual pledge service. Rev. Turpin spoke on the subject of “The Negro in American History.” Mt. Olive regularly hosted meetings of the Flint branch of the NAACP throughout Rev. Turpin’s leadership.',
        'Mrs. Turpin was very involved in the life of the church and the community. She was an active member of the Flint Council of Churchwomen, a mentor to the women in her church family and her own family, and a leader in her own right at Mt Olive where women have always played a large role. In January 1943, the Flint Journal reported that a Sunday evening service was conducted by the Ladies Union under the leadership of Mrs. Percy H. Vreeland vice-president of the Flint Council of Church Women who offered a speech entitled “Behold My Hand.” Mrs. Clarence Twining told the story of the missionary dollar; Mrs. Clarence W. Kimp directed the tableaux; and Miss Dorothy Green sang a solo. A decade later, Mrs Turpin would take the lead in researching and developing a strategy for building a new church, and then when the church property was to be taken for the building of the I69 freeway project, she personally advocated for the preservation of the church property at U.S. Senator Hart’s office.',
        'Under his leadership, Mt. Olive saw large growth, quadrupling the membership. He led the effort to build a new and larger building at 424 E. Kennelworth and to pay off its mortgage. The Fellowship Hall, where the cornerstone was laid in 1957, has been named in his honor. He retired in May 1972 and is remembered by members for his staid preaching style, his ability to strengthen church finances, his personal support for his congregants, and his emphasis on punctuality.'
      ]
    },
    {
      id: 'edgar',
      date: '1937-1939',
      title: 'Rev. Edgar James Timmons',
      content: [
        'Edgar James Timmons was born in 1890 in Cheraw, South Carolina, and studied for the ministry at the Moody Bible Institute of Chicago and Oberlin College. He served in World War I, and moved to Flint in 1928. He was an autoworker living at 2033 Stanford Ave.',
        'with his wife Verna throughout the 1930s. He conducted services at Mt. Olive as early as 1931. While he served as acting pastor of Mt. Olive, the intermediate and junior groups of the Baptist Young People’s Union continued to meet; Mrs. Mayola Wainwright was the president of the Willing Workers CLub; Mrs. Edith Robinson directed the choir; and Timmons preached on an array of subjects. On July 18, 1937 Rev. Timmons attended the final service in Bethel Methodist Church’s original building on the corner of Liberty and 12th, which was torn down and replaced on that corner the same year. Bethel Methodist moved to Ballenger Rd. in 2016 and Trinity Pentecostal moved into that building. Rev. Timmons would go on to serve at Metropolitan Baptist Tabernacle, Flint, as an assistant to Rev. Thomas Ballou from 1940 and as minister from 1946. He was very active in local Flint civic, ministerial, fraternal, and Black organizations. He ran for public office as a representative of the Southside on the Genesee County board of supervisors in 1941. He became ill and retired from the ministry in 1955 and died in 1957. He is buried at River Rest Cemetery.'
      ]
    },
    {
      id: 'junius',
      date: '1934-1937',
      title: 'Rev. Junius H. Thomas',
      content: [
        'Junius Thomas was the pastor of Mt. Olive from 1934 through early 1937. He and his wife Cassie lived at 601 E 9th.',
        'He was born in Alabama around 1885, and had been a minister in Alabama, North Carolina, and West Virginia before coming to Flint and serving as the minister of New Hope Baptist at 1703 Elm St. As pastor, he addressed a Negro Education forum at the YMCA in 1934. He moved to Durham, North Carolina before 1940.'
      ]
    },
    {
      id: 'paschall',
      date: '1932-1933',
      title: 'Rev. Paschall Lee Sanders / Saunders',
      content: [
        'Rev. Paschall Sanders (or Saunders) was born in Louisiana and had served as a minister in Texas before coming to Flint in 1931 with his wife Mary and their children. They initially lived at 810 Pasadena and he was the minister of Canaan Baptist Church at 910 E. Gillespie Ave.',
        'In March of 1932 Sanders was appointed minister of Mt. Olive and the family moved to 424 E. Wellington. By 1934 they had departed for Madison, Wisconsin where he would continue his ministry.'
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
        'The Rev Elbert L. Todd (1879-1960) served as the pastor of Mt. Olive for some of 1931 and 1932. He was born in Mississippi and worked as a farmer there as a young man before studying for the ministry.',
        'He had served in Cairo, Illinois, but by 1931 he was serving as the full-time minister of Second Baptist Church in Battle Creek where he lived with his wife and three adult children and at Mt. Olive in Flint, possibly as an interim or supply minister. He remained at Second Baptist until 1944, and then he served for 16 years as the minister of Mt. Zion Baptist in Ecorse, Michigan. Todd held the position of president of the Wolverine State Baptist Convention for 25 years. He served the Baptist church until the moment of his death, which occurred in the middle of his church’s annual business meeting in 1960. '
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
        'Rev. L.R.W. Johnson came to Flint in 1928 to work at Mt. Olive. His wife and nine children remained in Virginia. He was a boarder at 1520 Park St. in 1929 and 1930. He appears weekly in the Flint Journal preaching at Mt. Olive on Sunday mornings and evenings on a variety of topics.',
        'In May 1930, George Johnson began rehearsals for a music training course at Mt. Olive church. In June or July of 1930, Rev. Johnson submitted his resignation. At their monthly meeting, the congregation voted to ask Rev Johnson to reconsider and to return. The following week a group of church members called a second meeting at which they declared the minister’s position vacant. Rev. Johnson and his supporters sought a legal injunction against the organizers of that second meeting on the grounds that the monthly meeting of the congregation occurred only on the first Tuesday following the first Sunday of each month and that the second meeting had been out of order. Johnson continued to preach at Mt. Olive through the Fall of 1930, but by 1931 he was the pastor of New Hope Baptist Church at 1703 Elm St. and he was living at 2046 Stanford Ave. It is unclear whether New Hope was composed of the faction of Mt. Olive members who supported Johnson or whether it was an independently organized congregation. Rev Johnson died in Nashville in 1935.'
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
        'Wade McKinney (1892-1963) was born in Cleveland, Ga., to Wade and Mary Brown McKinney. He attended Atlanta Baptist College Academy, Morehouse College, and Colgate Rochester Theological Seminary and served in the U.S. Army in World War I.',
        'He came to Mt. Olive in 1923 and lived at 1617 Harrison St. until moving to the parsonage at 1608 Park St. In 1924 he married Annie Ruth Berry (1900-1966), from Birmingham, Alabama. Ruth Berry McKinney had been educated at Spelman College and Columbia University. By the time he began in 1923, the mass migration to Flint had begun and the church was ramping up to meet the needs of recent migrants in the city. In June 1924 a singing group known as “The Ford Eight” visited Flint and performed at Mt. Olive. The entrance fee was 25 cents. In 1925 the NAACP met at Mt. Olive. In November of that same year a week-long series of evangelical events was held at Mt. Olive with a visiting preacher from Connecticut. Miss Dorothy Green sang “ Steal Away to Jesus” and Mrs. Ruth McKinney sang “Stand By Me.” During McKinney’s ministry, the church grew from 39 members to over 300. He established a church administrative structure, missionary society, a chapter of the Baptist Young People’s Union, the Ada Berry Bible class (named after his mother in law), Women\'s Day, a Senior Usher Board, a choir, a deacon board, and the trustee board. Rev. McKinney, in his capacity as minister of Mt. Olive, supported the establishment and development of Shiloh Baptist Church, Flint. He attended the Michigan-Ontario Baptist convention in Windsor in 1925 and read the convention reports for his evening sermon. In 1925 the membership was estimated at 200 (with 75 owning or purchasing their homes) when Rev. R.L. Bradby from Detroit’s Second Baptist and president of the Michigan-Ontario Baptist Convention launched a building fund for Mt. Olive. The American Baptist Home Mission Society engaged an architect, but no building occurred until 1956. In 1926 services featured both a senior and a junior choir and performed songs such as Harry Burleigh’s “Deep River,” Felix Mendelssohn’s “Oh Rest in the Lord,” and Holton\'s “The Chimes of the Holy Night.” The McKinney family moved to Cleveland in 1928 to lead the large but divided Antioch Church where they became religious and community leaders who fought for civil rights. He worked for fair housing in Cleveland by developing a model for church sponsored cooperative housing. His wife returned to Flint in May 1952 as a visiting speaker for Women\'s Day. His son Samuel McKinney, who was born in Flint, was also educated at Morehouse and became a Baptist minister. Rev. Samuel McKinney visited Mt. Olive in July of 1952 as the guest speaker for the youth day service. Rev. Wade Hampton McKinney is featured in the Morehouse College International Hall of Honor and his family papers and photos are on file at Cleveland Public Library.'
      ]
    },
    {
      id: 'joseph',
      date: '1917-1923',
      title: 'Rev. Joseph Caldwell Nicholas',
      content: [
        'Joseph Caldwell Nicholas (1883-1940) was from New Orleans, the son of a minister. He studied at Virginia Union Theological Seminary and at McMaster in Montreal.',
        'He and his wife Viola B. Lloyd arrived in Flint in 1917 with their infant son Joseph Jr.  During his pastorate pews were installed in the newly purchased building at 1601 Clifford St., and a playground was built. The church purchased a parsonage at 1608 Park St. where Nicholas lived through 1923. He was ill during the final months of his pastorate and he and his family returned to New Orleans.'
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
        'Herbert Leslie Dungy (1893/4-1976) was in his early 20s when he served for four years as minister of Mt. Olive. He was born in Chatham, Kent, Ontario. His parents had come there from Tennessee.',
        'He came into Michigan in 1910 and lived and worked in Jackson before receiving that call from Mt. Olive. Once arriving in Flint he boarded at Margaret Lyons’ home at 1608 Pine St. The Mt. Olive congregation contained 34 members in 1915, 48 in 1916, and 66 in 1918. The growing church held a fall rummage sale at the Presbyterian Church downtown at 721 S Saginaw St. in 1915. Under Dungy’s leadership the “Ethiopian Progressive Association" was organized in the church to support the “moral and spiritual uplift” of members. Rev. Dungy resigned from the pastorage of Mt.Olive in February 1918, married Lena Alberta Millben in Ontario, and served for a time as the pastor of the Baptist Evangelical Church in Jackson. He continued to live and work in Jackson, though not long as a minister, until his death in 1976. '
      ]
    },
    {
      id: 'david',
      date: '1912-1914',
      title: 'Rev. David C. Adams',
      content: [
        'In March 1912, the “Mt. Olive Mission” on E. 9th St. called a new minister, Rev. David C. Adams. Rev. Adams preached Sunday mornings and evenings and also held a week-long series of revival meetings in the summer',
        'Mt. Olive first appears in the Flint City Directory in 1913 and again in 1915 with Adams as minister and regular services being held Sunday mornings and Wednesday evenings, and Sunday School. Adams lived at 1717 Pine St. and the church continued to meet in Sarah Howard’s home on 9th St.'
      ]
    },
    {
      id: 'daniel',
      date: '1910',
      title: 'Rev. Daniel L. Jackson',
      content: [
        'Daniel Jackson, a minister from Toledo, answered Mt. Olive’s invitation to come to Flint and to serve as their first official minister.',
        'Jackson boarded with the Linney family at 1718 Pine St. and served at Mt. Olive for a short time, perhaps less than a year, after which returned to Toledo. During Rev. Jackson’s short tenure, Mt. Olive was still holding services and Sunday school in the home of Sarah Howard on 9th St. The church was often referred to in the Flint Journal as the “Mt. Olive Mission,” but in 1911 was called Mount Olive Baptist Church, and reported to have paid off a site for a new church building (on Ward St.). On April 17, 1911, the Journal reports, Elder William Lyons spoke at “Mt. Olive Chapel” in Sarah Howard’s home. Early members Arthur Lawrence, Bessie Johnson, and Neta Howard sang; child Gladys Owens gave a recitation; Neta Howard read and Bessie Johnson played the organ. Miss Jennie Johnson was in attendance visiting from Dresden, Ontario.  Miss Jennie Johnson was the first woman to be ordained in the Baptist church in Ontario. She visited her older brother James Henry Johnson and the Mt. Olive community a number of times and eventually moved to Flint in 1925 to start the Christian Children’s Center on Pasadena St. When she moved to Flint she lived on the Southside at 1517 Fay St.',
      ]
    },
  ];



  return (
    <div className="timeline-wrapper">
      <div className="timeline-instructions">
      Click on a name in the timeline to learn more about that pastor!
      </div>      
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
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          transform: 'translate(-50%, -50%)', // Centering trick
          maxWidth: '700px',
          maxHeight: '80vh',
          overflowY: 'auto',
          padding: '2rem',
          borderRadius: '1rem',
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
