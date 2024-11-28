from django.urls import path
from .views import InvoiceViewSet

urlpatterns = [
    path('invoices/', InvoiceViewSet.as_view({'post': 'create'}), name='invoice-create'),
]
