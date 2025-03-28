import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useEffect, useState } from 'react';

export default function Timeline() {
  const [loading, setLoading] = useState(true);
  const [pastors, setPastors] = useState({ images: [], videos: [] });

  useEffect(() => {
    const fetchPastors = async () => {
      try {
        const response = await fetch('https://floral-park-webserver-861401374674.us-central1.run.app/api/pastors');
        if (!response.ok) {
          throw new Error('Failed to fetch media data');
        }
        const data = await response.json();
        console.log('Fetched Pastors Data:', data);
        setPastors(data);
      } catch (error) {
        console.error('Error fetching media:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPastors();
  }, []);


  if (loading) {
    return <div>Loading...</div>;
  }


  return (
<VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="1910-1912"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
  >
    <h3 className="vertical-timeline-element-title">Rev. Daniel L. Jackson</h3>
    <p>
    Daniel Jackson, a minister from Toledo, answered Mt Olive’s invitation to come to Flint and to serve as their first official minister. Jackson boarded with the Linney family at 1718 Pine St.and served at Mt Olive for a short time, perhaps less than a year, after which returned to Toledo.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="1912-1914"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
  >
    <h3 className="vertical-timeline-element-title">Rev. David C. Adams</h3>
    <p>
    In March 1912 the “Mt Olive Mission” on E. 9th St. called a new minister, Rev. David C. Adams. Rev. Adams preached Sunday mornings and evenings and also held a week-long series of revival meetings in the summer. Mt Olive first appears in the Flint City Directory in 1913 and again in 1915 with Adams as minister and regular services being held Sunday mornings and Wednesday evenings, and Sunday School. Adams lived at 1717 Pine St. and the church continued to meet in Sraah Howard’s home on 9th Street.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="1914-1918"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}

  >
    <h3 className="vertical-timeline-element-title">Rev. Herbert Leslie Dungy</h3>
    <p>
    Herbert Leslie Dungy (1893/4-1976) was in his early 20s when he served for four years as minister of Mt Olive. He was born in Chatham, Kent, Ontario. His parents had come there from Tennessee. He came into Michigan in 1910 and lived and worked in Jackson before receiving that call from Mt Olive. Once arriving in Flint he boarded at Margaret Lyons’ home at 1608 Pine St. The Mt Olive congregation contained 34 members in 1915, 48 in 1916, and 66 in 1918. The growing church held a Fall rummage sale at the Presbyterian Church downtown at 721 S Saginaw St. in 1915. Under Dungy’s leadership the “Ethiopian Progressive Association" was organized in the church to support the “moral and spiritual uplift” of members
    </p>
    <img src={pastors.images[32].url} alt="Pastor Herbert Leslie Dungy" style={{ width: '100%', height: 'auto' }} />
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="1920"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
  >
    <h3 className="vertical-timeline-element-title">Rev. Bolen</h3>
    <p>
    An Arthur Bolen from 9th St. was a full time auto worker, according to the 1920 Census, who may have preached for a short period. No information is available on his tenure as minister.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="1917-1923"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
  >
    <h3 className="vertical-timeline-element-title">Rev. Joseph Caldwell Nicholas</h3>
    <p>
    Joseph Caldwell Nicholas (1883-1940) was from New Orleans, the son of a minister. He studied at Virginia Union Theological Seminary and at McMaster in Montreal. He and his wife Viola B. Lloyd arrived in Flint in 1917 with their infant son Joseph Jr.  During his pastorate new pews were installed in the church, and a playground was built. The church purchased a parsonage at 1608 Park St. where Nicholas lived through 1923. He was ill during the final months of his pastorate and he and his family returned to New Orleans.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="1923-1929"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
  >
    <h3 className="vertical-timeline-element-title">Rev. Wade Hampton McKinney</h3>
    <p>
    Wade McKinney (1892-1963) was born in Cleveland, Ga., to Wade and Mary Brown McKinney. He attended Atlanta Baptist College Academy, Morehouse College, and Colgate Rochester Theological Seminary and served in the U.S. Army in World War I. He came to Mt Olive in 1923 and lived at 1617 Harrison St. until moving to the parsonage at 1608 Park St. In 1924 he married Annie Ruth Berry (1900-1966), from Birmingham, Alabama. Ruth Berry McKinney had been educated at Spelman College and Columbia University.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="1928"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
  >
    <h3 className="vertical-timeline-element-title">Rev. William M. Epps, interim</h3>
    <p>
    Rev. William Epps preached at Mt Olive for a few months in the Fall of 1928. He was a laborer and auto worker who lived at 510 Kennelworth with his wife Mildred.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="1928-1930"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
  >
    <h3 className="vertical-timeline-element-title">Rev. Louis Robert Webster Johnson</h3>
    <p>
    Rev. LRW Johnson came to Flint to work at Mt Olive. His wife and children remained in Virginia. He was a boarder at 1520 Park St. in 1929 and 1930. He appears weekly in the Flint Journal preaching at Mt Olive on Sunday mornings and evenings on a variety of topics. In May 1930, George Johnson began rehearsals for a music training course at Mt Olive church.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="1932-1933"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
  >
    <h3 className="vertical-timeline-element-title">Rev. Paschall Lee Sanders</h3>
    <p>
    Rev. Paschall Sanders was born in Louisiana and had served as a minister in Texas before coming to Flint in 1931 with his wife Mary and their children. They initially lived at 810 Pasadena and he was the minister of Canaan Baptist Church at 910 E. Gillespie Ave. In 1932 they moved to 424 E. Wellington. By 1934 they had departed for Madison, Wisconsin where he would continue his ministry.`,
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="1934-1936"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
  >
    <h3 className="vertical-timeline-element-title">Rev. Junius H. Thomas</h3>
    <p>
    Junius Thomas was the pastor of Mt Olive from 1934 through 1936. He and his wife Cassie lived at 601 E 9th. He was born in Alabama around 1885, and had been a minister in Alabama, North Carolina, and West Virginia before coming to Flint and serving as the minister of New Hope Baptist at 1703 Elm Street. He later moved to Durham, North Carolina by 1940.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="1937"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
  >
    <h3 className="vertical-timeline-element-title">Rev. W.S. Winston, interim</h3>
    <p>
    It is not yet clear who Rev. Winston was. He may have been a member of the church, possibly Willis Winston or William Winston, both of whom lived in the neighborhood.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="1937-1939"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
  >
    <h3 className="vertical-timeline-element-title">Rev. E.J. Timmons, interim</h3>
    <p>
    Edgar James Timmons was born in 1890 in South Carolina, served in World War I, and had moved to Flint by 1929. He was an autoworker living at 2033 Stanford Ave. with his wife Verna throughout the 1930s. He died in 1957 in Flint and is buried at River Rest Cemetery.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="1939-1972"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
  >
    <h3 className="vertical-timeline-element-title">Rev. Robert Roscoe Turpin</h3>
    <p>
    Born in Alabama and educated at Morehouse College and Cornell University, Rev. Robert R. Turpin (May 22, 1886 - January 13, 1986) came to Mt Olive with his wife Annie and their two sons, Robert and Charles, in 1939. He had recently served as a minister in Leroy, New York for 13 years. The family lived at 1419 Clifford St. Turpin began his work at Mt Olive in January and was officially installed in October of 1939. Within his first five years in the position, Turpin had become a recognized leader in the Flint community, urging the city to appoint more Black residents in the city services departments, serving as President of the Progressive Ministers Interdenominational Alliance and as the Vice President of the Flint Council of Churches.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="1972-2008"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
  >
    <h3 className="vertical-timeline-element-title">Rev. Dr. Roy Ivory Greer Jr.</h3>
    <p>
    Rev. Roy Greer (1935-2008) was born in Henderson, Texas. He began ministry work at the age of 12 doing revivals across the country, with his 12 year old uncle, Bishop T.T. Terry. They were affectionately known as the twin preachers. He was educated at the Southern Bible Institute in Dallas, TX; John Wesley College in Owosso, MI; Grand Rapids Baptist College and Seminary; and Calvary Christian Seminary. Rev. Greer and his wife Lois Dean Greer had six children.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2009"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
  >
    <h3 className="vertical-timeline-element-title">Rev. Roosevelt Austin, interim</h3>
    <p>
    Rev. Austin, the senior pastor of Zion Missionary Baptist in Saginaw, MI, served as interim minister at Mt Olive in 2009.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2009-2016"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
  >
    <h3 className="vertical-timeline-element-title">Rev. Major Stewart</h3>
    <p>
    Rev. Stewart is from Muskegon Heights, Michigan and was called to serve as pastor of Mt Olive in 2009. He is a graduate of Eastern Michigan University and holds a doctorate in theology from United Theological Seminary in Dayton, OH. He and his wife Carla Brooks Stewart raised three daughters: Alexandria Janine, Mikaela Ann, and Karissa Danielle. Reverend Stewart worked to make Mt Olive debt free, burning the mortgage for the Family Life Center in front of the congregation in June 2014. During his ministry, the church produced the video history, “This Far by Faith,” in honor of its 100th anniversary. He acquired three properties adjacent to the church and extended youth ministries and programming. He has since served as a pastor of The Greater Mt Sinai Baptist Church in Charlotte, NC.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2017"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
  >
    <h3 className="vertical-timeline-element-title">Rev. Ronald Wilson, interim</h3>
    <p>
    Rev Wilson served as Associate Pastor under Rev. Greer and served as interim minister in 2017.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2018-present"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
  >
    <h3 className="vertical-timeline-element-title">Rev. William M. Epps, interim</h3>
    <p>
    Rev. Jevon Q. Catlett, originally from Hopkinsville, Kentucky, was called to preach at the age of 13. He joined the St. Bethlehem Baptist Church, under the leadership of Pastor Roland Butler, Jr., where he preached his first sermon. Rev. Catlett was educated at Lane College, Jackson, Tennessee and United Theological Seminary in Dayton, Ohio. He became a licensed minister in 2003 and was ordained in 2009. Prior to accepting the call to Mt Olive in September of 2018, Rev. Catlett served at Mt. Ararat Missionary Baptist Church in Birmingham, Alabama and Greater Hope Baptist Church in Murray, Kentucky.
    </p>
  </VerticalTimelineElement>
</VerticalTimeline>
  );
}