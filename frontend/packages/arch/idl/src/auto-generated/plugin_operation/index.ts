/*
 * Copyright 2025 coze-dev Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
 
// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
/* eslint-disable */
/* tslint:disable */
// @ts-nocheck

import * as admin_api from './namespaces/admin_api';
import * as auth_api from './namespaces/auth_api';
import * as base from './namespaces/base';
import * as plugin_common from './namespaces/plugin_common';

export { admin_api, auth_api, base, plugin_common };
export * from './namespaces/admin_api';
export * from './namespaces/auth_api';
export * from './namespaces/base';
export * from './namespaces/plugin_common';

export type Int64 = string;

export default class PluginOperationService<T> {
  private request: any = () => {
    throw new Error('PluginOperationService.request is undefined');
  };
  private baseURL: string | ((path: string) => string) = '';

  constructor(options?: {
    baseURL?: string | ((path: string) => string);
    request?<R>(
      params: {
        url: string;
        method: 'GET' | 'DELETE' | 'POST' | 'PUT' | 'PATCH';
        data?: any;
        params?: any;
        headers?: any;
      },
      options?: T,
    ): Promise<R>;
  }) {
    this.request = options?.request || this.request;
    this.baseURL = options?.baseURL || '';
  }

  private genBaseURL(path: string) {
    return typeof this.baseURL === 'string'
      ? this.baseURL + path
      : this.baseURL(path);
  }

  /** POST /api/opt_plugin/allow_domain */
  EditDomainWhitelist(
    req: admin_api.EditDomainWhitelistRequest,
    options?: T,
  ): Promise<admin_api.EditDomainWhitelistResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/opt_plugin/allow_domain');
    const method = 'POST';
    const data = {
      domain_port_list: _req['domain_port_list'],
      operate_type: _req['operate_type'],
      Base: _req['Base'],
    };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/opt_plugin/record_bpm */
  CreateRecord(
    req: auth_api.CreateRecordRequest,
    options?: T,
  ): Promise<auth_api.CreateRecordResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/opt_plugin/record_bpm');
    const method = 'POST';
    const data = {
      material_id: _req['material_id'],
      category_id: _req['category_id'],
      operate_type: _req['operate_type'],
      Base: _req['Base'],
    };
    const headers = { Cookie: _req['Cookie'] };
    return this.request({ url, method, data, headers }, options);
  }

  /** POST /api/opt_plugin/list */
  GetPluginList(
    req?: admin_api.GetPluginListRequest,
    options?: T,
  ): Promise<admin_api.GetPluginListResponse> {
    const _req = req || {};
    const url = this.genBaseURL('/api/opt_plugin/list');
    const method = 'POST';
    const data = {
      page: _req['page'],
      size: _req['size'],
      status: _req['status'],
      plugin_ids: _req['plugin_ids'],
      space_id: _req['space_id'],
      plugin_name: _req['plugin_name'],
      order_by: _req['order_by'],
      Base: _req['Base'],
    };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/opt_plugin/quote_bot */
  GetPluginQuoteBot(
    req: admin_api.GetPluginQuoteBotRequest,
    options?: T,
  ): Promise<admin_api.GetPluginQuoteBotResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/opt_plugin/quote_bot');
    const method = 'POST';
    const data = {
      page: _req['page'],
      size: _req['size'],
      plugin_id: _req['plugin_id'],
      space_id: _req['space_id'],
      bot_id: _req['bot_id'],
      bot_name: _req['bot_name'],
      connector_id: _req['connector_id'],
      Base: _req['Base'],
    };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/opt_plugin/trans_owner */
  TransPluginOwner(
    req: admin_api.TransPluginOwnerRequest,
    options?: T,
  ): Promise<admin_api.TransPluginOwnerResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/opt_plugin/trans_owner');
    const method = 'POST';
    const data = {
      material_id: _req['material_id'],
      target_dev_id: _req['target_dev_id'],
      Base: _req['Base'],
    };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/opt_plugin/get_plugin_quota_rule */
  GetPluginQuotaRule(
    req: admin_api.GetPluginQuotaRuleRequest,
    options?: T,
  ): Promise<admin_api.GetPluginQuotaRuleResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/opt_plugin/get_plugin_quota_rule');
    const method = 'POST';
    const data = { plugin_id: _req['plugin_id'], Base: _req['Base'] };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/opt_plugin/update_plugin_quota_rule */
  UpdatePluginQuotaRule(
    req: admin_api.UpdatePluginQuotaRuleRequest,
    options?: T,
  ): Promise<admin_api.UpdatePluginQuotaRuleResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/opt_plugin/update_plugin_quota_rule');
    const method = 'POST';
    const data = {
      plugin_id: _req['plugin_id'],
      quota_rule_and_apis: _req['quota_rule_and_apis'],
      Base: _req['Base'],
    };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/opt_plugin/update_plugin_pricing_rule */
  UpdatePluginPricingRule(
    req: admin_api.UpdatePluginPricingRuleRequest,
    options?: T,
  ): Promise<admin_api.UpdatePluginPricingRuleResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/opt_plugin/update_plugin_pricing_rule');
    const method = 'POST';
    const data = {
      plugin_id: _req['plugin_id'],
      pricing_rule: _req['pricing_rule'],
      Base: _req['Base'],
    };
    return this.request({ url, method, data }, options);
  }

  /**
   * POST /api/opt_plugin/get_plugin_pricing_rule
   *
   * 计费规则
   */
  GetPluginPricingRule(
    req: admin_api.GetPluginPricingRuleRequest,
    options?: T,
  ): Promise<admin_api.GetPluginPricingRuleResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/opt_plugin/get_plugin_pricing_rule');
    const method = 'POST';
    const data = { plugin_id: _req['plugin_id'], Base: _req['Base'] };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/opt_plugin/delete_plugin_pricing_rule */
  DeletePluginPricingRule(
    req: admin_api.DeletePluginPricingRuleRequest,
    options?: T,
  ): Promise<admin_api.DeletePluginPricingRuleResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/opt_plugin/delete_plugin_pricing_rule');
    const method = 'POST';
    const data = {
      plugin_id: _req['plugin_id'],
      rule_id: _req['rule_id'],
      Base: _req['Base'],
    };
    return this.request({ url, method, data }, options);
  }
}
/* eslint-enable */
