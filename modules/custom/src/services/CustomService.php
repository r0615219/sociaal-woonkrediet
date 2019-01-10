<?php
/**
 * Custom module for Craft CMS 3.x
 *
 * Some cool functions here
 *
 * @link      http://carolineboeykens.be
 * @copyright Copyright (c) 2018 Caroline Boeykens
 */

namespace modules\custom\services;

use GuzzleHttp\Client;
use modules\custom\Custom;

use Craft;
use craft\base\Component;

/**
 * CustomService Service
 *
 * All of your module’s business logic should go in services, including saving data,
 * retrieving data, etc. They provide APIs that your controllers, template variables,
 * and other modules can interact with.
 *
 * https://craftcms.com/docs/plugins/services
 *
 * @author    Caroline Boeykens
 * @package   Custom
 * @since     1.0.0
 */
class CustomService extends Component
{
    public function geocode($element)
    {

        if ( !$element->latitude && ! $element->longitude) {
            if ($element->street or $element->city) {
                $address = $element->street . ' ' . $element->city;
            } else {
                $address = '';
            }
            if ($address) {
                $client = new Client( [ 'base_uri' => 'https://maps.googleapis.com' ] );
                //TODO: api key aanpassen naar betaalde woonkrediet api
                $res    = $client->request( 'GET', 'maps/api/geocode/json?address=' . urlencode( $address ) . '&key=AIzaSyBUuzDdWtlCyDyuPIVvt9CJk6gnJtE-gt0', [ 'allow_redirects' => false ] );
                $json   = json_decode( $res->getBody()->getContents(), true );
                if ( $json['status'] == 'OK' ) {
                    if ( $json['results'][0]['geometry']['location'] ) {
                        $element->latitude  = $json['results'][0]['geometry']['location']['lat'] . '';
                        $element->longitude = $json['results'][0]['geometry']['location']['lng'] . '';
                    }
                }
            }
        }
        return $element;
    }
}
