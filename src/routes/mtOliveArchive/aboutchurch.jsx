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
    <>
    <div className="pastor-timeline">
{/* Pastors Section */}
    <TimeLine />
    </div>
    </>
  );
}
