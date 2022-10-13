import React , { useState} from 'react'
import { useParams } from 'react-router-dom';

export default function Forum() {
  const {Forumurl} = useParams();
  return (
    <div>forum</div>
  )
}
