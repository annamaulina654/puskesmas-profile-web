<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class LandingController extends Controller
{
    public function home()
    {
        return Inertia::render('landing/home');
    }

    public function about()
    {
        return Inertia::render('landing/profile/about');
    }

    public function visionMission()
    {
        return Inertia::render('landing/profile/vission-mission');
    }

    public function organization()
    {
        return Inertia::render('landing/profile/organization');
    }

    public function innovations()
    {
        return Inertia::render('landing/profile/innovations');
    }

    public function services()
    {
        return Inertia::render('landing/services');
    }

    public function announcements()
    {
        return Inertia::render('landing/information/announcements');
    }

    public function activities()
    {
        return Inertia::render('landing/information/activities');
    }

    public function helpdesk()
    {
        return Inertia::render('landing/information/helpdesk');
    }

    public function contact()
    {
        return Inertia::render('landing/contact');
    }
}