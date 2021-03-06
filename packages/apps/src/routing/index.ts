// Copyright 2017-2019 @polkadot/apps authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Routing, Routes } from '../types';

import appSettings from '@polkadot/joy-settings/';

import election from './joy-election';
import forum from './joy-forum';
import help from './joy-help';
import media from './joy-media';
import members from './joy-members';
import proposals from './joy-proposals';
import roles from './joy-roles';
import pages from './joy-pages';

import template from './123code';
import accounts from './accounts';
import addressbook from './addressbook';
import explorer from './explorer';
import extrinsics from './extrinsics';
import js from './js';
import settings from './settings';
import staking from './staking';
import storage from './storage';
import toolbox from './toolbox';
import transfer from './transfer';

const routes: Routes = appSettings.isBasicMode
  ? ([] as Routes).concat(
    explorer,
    staking,
    roles,
    transfer,
    null,
    media,
    forum,
    members,
    accounts,
    addressbook,
    null,
    election,
    proposals,
    null,
    help,
    settings,
    template,
    null,
    pages
  )
  : ([] as Routes).concat(
    explorer,
    staking,
    roles,
    transfer,
    null,
    media,
    forum,
    members,
    accounts,
    addressbook,
    null,
    election,
    proposals,
    null,
    storage,
    extrinsics,
    null,
    help,
    settings,
    toolbox,
    js,
    template,
    null,
    pages
  );

export default ({
  default: 'explorer',
  routes
} as Routing);
