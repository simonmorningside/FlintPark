import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import '../mtOliveArchive/timeline-page.css';
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
        setPastors(data);
      } catch (error) {
        console.error('Error fetching media:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPastors();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="timeline-wrapper">
    <VerticalTimeline>
      <div id="johnson">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="1928-1930"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
        >
          <h3 className="vertical-timeline-element-title">Rev. Louis Robert Webster Johnson</h3>
          <p>
            Rev. LRW Johnson came to Flint to work at Mt Olive. His wife and children remained in Virginia. He was a
            boarder at 1520 Park St. in 1929 and 1930. He appears weekly in the Flint Journal preaching at Mt Olive on
            Sunday mornings and evenings on a variety of topics. In May 1930, George Johnson began rehearsals for a
            music training course at Mt Olive church.
          </p>
        </VerticalTimelineElement>
      </div>

      <div id="sanders">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="1932-1933"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
        >
          <h3 className="vertical-timeline-element-title">Rev. Paschall Lee Sanders</h3>
          <p>
            Rev. Paschall Sanders was born in Louisiana and had served as a minister in Texas before coming to Flint in
            1931 with his wife Mary and their children. They initially lived at 810 Pasadena and he was the minister of
            Canaan Baptist Church at 910 E. Gillespie Ave. In 1932 they moved to 424 E. Wellington. By 1934 they had
            departed for Madison, Wisconsin where he would continue his ministry.
          </p>
        </VerticalTimelineElement>
      </div>

      <div id="thomas">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="1934-1936"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
        >
          <h3 className="vertical-timeline-element-title">Rev. Junius H. Thomas</h3>
          <p>
            Junius Thomas was the pastor of Mt Olive from 1934 through 1936. He and his wife Cassie lived at 601 E 9th.
            He was born in Alabama around 1885, and had been a minister in Alabama, North Carolina, and West Virginia
            before coming to Flint and serving as the minister of New Hope Baptist at 1703 Elm Street. He later moved to
            Durham, North Carolina by 1940.
          </p>
        </VerticalTimelineElement>
      </div>

      <div id="winston">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="1937"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
        >
          <h3 className="vertical-timeline-element-title">Rev. W.S. Winston, interim</h3>
          <p>
            It is not yet clear who Rev. Winston was. He may have been a member of the church, possibly Willis Winston
            or William Winston, both of whom lived in the neighborhood.
          </p>
        </VerticalTimelineElement>
      </div>

      <div id="timmons">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="1937-1939"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
        >
          <h3 className="vertical-timeline-element-title">Rev. E.J. Timmons, interim</h3>
          <p>
            Edgar James Timmons was born in 1890 in South Carolina, served in World War I, and had moved to Flint by
            1929. He was an autoworker living at 2033 Stanford Ave. with his wife Verna throughout the 1930s. He died
            in 1957 in Flint and is buried at River Rest Cemetery.
          </p>
        </VerticalTimelineElement>
      </div>

      <div id="turpin">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="1939-1972"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
        >
          <h3 className="vertical-timeline-element-title">Rev. Robert Roscoe Turpin</h3>
          <p>
            Born in Alabama and educated at Morehouse College and Cornell University, Rev. Robert R. Turpin (May 22,
            1886 - January 13, 1986) came to Mt Olive with his wife Annie and their two sons, Robert and Charles, in
            1939. He had recently served as a minister in Leroy, New York for 13 years. The family lived at 1419
            Clifford St. Turpin began his work at Mt Olive in January and was officially installed in October of 1939.
            Within his first five years in the position, Turpin had become a recognized leader in the Flint community.
          </p>
        </VerticalTimelineElement>
      </div>

      <div id="greer">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="1972-2008"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
        >
          <h3 className="vertical-timeline-element-title">Rev. Dr. Roy Ivory Greer Jr.</h3>
          <p>
            Rev. Roy Greer (1935-2008) was born in Henderson, Texas. He began ministry work at the age of 12 doing
            revivals across the country, with his 12 year old uncle, Bishop T.T. Terry. They were affectionately known
            as the twin preachers. He was educated at the Southern Bible Institute in Dallas, TX; John Wesley College
            in Owosso, MI; Grand Rapids Baptist College and Seminary; and Calvary Christian Seminary.
          </p>
        </VerticalTimelineElement>
      </div>

      <div id="austin">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2009"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
        >
          <h3 className="vertical-timeline-element-title">Rev. Roosevelt Austin, interim</h3>
          <p>
            Rev. Austin, the senior pastor of Zion Missionary Baptist in Saginaw, MI, served as interim minister at Mt
            Olive in 2009.
          </p>
        </VerticalTimelineElement>
      </div>

      <div id="stewart">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2009-2016"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
        >
          <h3 className="vertical-timeline-element-title">Rev. Major Stewart</h3>
          <p>
            Rev. Stewart is from Muskegon Heights, Michigan and was called to serve as pastor of Mt Olive in 2009. He
            is a graduate of Eastern Michigan University and holds a doctorate in theology from United Theological
            Seminary in Dayton, OH.
          </p>
        </VerticalTimelineElement>
      </div>

      <div id="wilson">
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
      </div>

      <div id="catlett">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018-present"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
        >
          <h3 className="vertical-timeline-element-title">Rev. Jevon Q. Catlett</h3>
          <p>
            Rev. Jevon Q. Catlett, originally from Hopkinsville, Kentucky, was called to preach at the age of 13. He
            became a licensed minister in 2003 and was ordained in 2009. Prior to accepting the call to Mt Olive in
            September of 2018, Rev. Catlett served at Mt. Ararat Missionary Baptist Church in Birmingham, Alabama and
            Greater Hope Baptist Church in Murray, Kentucky.
          </p>
        </VerticalTimelineElement>
      </div>
    </VerticalTimeline>
    </div>
  );
}
