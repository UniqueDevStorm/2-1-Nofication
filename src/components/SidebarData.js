import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as Icons from 'react-icons/all';
import { DB } from '../file/History.json'

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: '알림장',
    path: '/',
    icon: <Icons.IoIosNotificationsOutline />,
    cName: 'nav-text',
  },
  {
    title: '시험 범위',
    path: '/test',
    icon: <Icons.GrNotes />,
    cName: 'nav-text'
  },
  {
    title: '역사 영상 과제',
    path: '/view',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  ...(Object.keys(DB).map(id => ({
    title: id,
    path: `/view/${id}`,
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  }))),
  {
    title: '시간표',
    path: '/time',
    icon: <Icons.BiTime />,
    cName: 'nav-text'
  },
  {
    title: '관리자 전용',
    path: '/admin',
    icon: <Icons.RiAdminFill />,
    cName: 'nav-text'
  }
];
